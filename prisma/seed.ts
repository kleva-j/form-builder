import { generateFormField } from "@/lib/utils";

import prisma from "@/lib/prisma";

async function main() {
  try {
    await prisma.form.createMany({ data: generateFormField(2) });
  } catch (error) {
    console.log(error);
  }
}

main().finally(async () => await prisma.$disconnect());
