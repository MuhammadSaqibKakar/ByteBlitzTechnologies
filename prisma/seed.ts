import "dotenv/config";

import { getPrisma } from "../src/lib/server/db";
import { hashSecret } from "../src/lib/server/secret";

let prisma: ReturnType<typeof getPrisma> | undefined;

async function main() {
  const accessCode = process.env.ADMIN_ACCESS_CODE;

  if (!accessCode) {
    throw new Error(
      "ADMIN_ACCESS_CODE is missing. Set it to your private admin code before running npm run db:seed.",
    );
  }

  const codeHash = hashSecret(accessCode);
  prisma = getPrisma();

  await prisma.adminSecret.upsert({
    where: { label: "primary" },
    update: { codeHash },
    create: { label: "primary", codeHash },
  });

  console.log("Admin access code saved in the database as a secure hash.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma?.$disconnect();
  });
