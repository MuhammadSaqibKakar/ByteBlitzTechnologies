import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";

type PrismaInstance = InstanceType<typeof PrismaClient>;

type MariaDbConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionLimit: number;
};

const globalForPrisma = globalThis as unknown as {
  byteblitzPrisma?: PrismaInstance;
};

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

function parseDatabaseUrl(): MariaDbConfig {
  const rawUrl = process.env.DATABASE_URL;

  if (!rawUrl) {
    throw new Error("DATABASE_URL is missing.");
  }

  const url = new URL(rawUrl);
  const database = url.pathname.replace(/^\//, "");

  if (!url.hostname || !url.username || !database) {
    throw new Error(
      "DATABASE_URL must include host, user, password, port, and database name.",
    );
  }

  return {
    host: url.hostname,
    port: Number(url.port || "3306"),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database,
    connectionLimit: Number(process.env.DATABASE_CONNECTION_LIMIT || "5"),
  };
}

function createPrismaClient() {
  const adapter = new PrismaMariaDb(parseDatabaseUrl());
  return new PrismaClient({ adapter });
}

export function getPrisma() {
  if (!globalForPrisma.byteblitzPrisma) {
    globalForPrisma.byteblitzPrisma = createPrismaClient();
  }

  return globalForPrisma.byteblitzPrisma;
}
