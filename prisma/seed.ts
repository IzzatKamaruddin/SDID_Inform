const { PrismaClient } = require('@prisma/client');
const { mbbsub, fbbsub} = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    await prisma.mbbsubs.deleteMany();
    console.log('Deleted records in mbbsubs table');

    await prisma.fbbsubs.deleteMany();
    console.log('Deleted records in fbbsubs table');

    await prisma.mbbsubs.createMany({
      data: mbbsub,
    });
    console.log('Added subscriptions data');

    await prisma.fbbsubs.createMany({
        data: fbbsub,
      });
      console.log('Added subscriptions data');

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
