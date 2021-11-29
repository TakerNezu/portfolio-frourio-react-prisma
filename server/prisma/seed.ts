/* eslint-disable no-console */
/* eslint no-void: ["error", { "allowAsStatement": true }] */
import { PrismaClient } from '@prisma/client'
import { DbData } from '$/json'

const prisma = new PrismaClient()

async function main() {

  for (const [key, value] of Object.entries(DbData)) {
    const client = prisma[key as keyof PrismaClient] as any
    for (const seed of value) {
      await client.upsert({
        where: { id: seed.id },
        update: { ...seed },
        create: { ...seed },
      })
    }
  }
}

main()
.catch((e) => {
  console.error(e)
  process.exit(1)
})
.finally(() => {
  void (async () => {
    await prisma.$disconnect()
  })()
})
