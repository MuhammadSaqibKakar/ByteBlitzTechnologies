import {
  createHash,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";

const keyLength = 64;
const scryptOptions = {
  N: 16384,
  r: 8,
  p: 1,
};

export function hashSecret(secret: string) {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(secret, salt, keyLength, scryptOptions);
  return [
    "scrypt",
    scryptOptions.N,
    scryptOptions.r,
    scryptOptions.p,
    salt,
    derived.toString("hex"),
  ].join(":");
}

export function verifySecret(secret: string, storedHash: string) {
  const [scheme, n, r, p, salt, hash] = storedHash.split(":");

  if (scheme !== "scrypt" || !n || !r || !p || !salt || !hash) {
    return false;
  }

  const expected = Buffer.from(hash, "hex");
  const actual = scryptSync(secret, salt, expected.length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
  });

  return (
    expected.length === actual.length && timingSafeEqual(expected, actual)
  );
}

export function createSessionToken() {
  return randomBytes(32).toString("hex");
}

export function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export function safeTrim(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}
