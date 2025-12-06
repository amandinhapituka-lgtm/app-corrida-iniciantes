/**
 * Script seguro para criar ou atualizar um usuário ADMIN
 * Rodar com:
 *  ADMIN_EMAIL="seuemail@dominio.com" ADMIN_PASSWORD="senhaSuperSegura" node scripts/create-admin.js
 */

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("❌ ERRO: Defina ADMIN_EMAIL e ADMIN_PASSWORD antes de rodar o script.");
    process.exit(1);
  }

  // Criptografa a senha
  const passwordHash = await bcrypt.hash(password, 10);

  // Cria ou atualiza o admin
  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: "ADMIN"
    },
    create: {
      email,
      passwordHash,
      role: "ADMIN",
      name: "Administrador"
    },
  });

  console.log("✅ Usuário admin criado/atualizado com sucesso:");
  console.log(`   Email: ${admin.email}`);
  console.log(`   Role: ${admin.role}`);

  process.exit(0);
}

main().catch((error) => {
  console.error("❌ Erro ao criar admin:", error);
  process.exit(1);
});