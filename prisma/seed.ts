import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({ where: { email: "admin@riviera-concierge.fr" } });
  if (existing) {
    console.log("Admin user already exists");
    return;
  }

  const hash = await bcrypt.hash("admin123", 10);
  await prisma.user.create({
    data: {
      email: "admin@riviera-concierge.fr",
      password: hash,
      role: "admin",
    },
  });
  console.log("Admin user created: admin@riviera-concierge.fr / admin123");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
