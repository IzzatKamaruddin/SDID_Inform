const { PrismaClient } = require('@prisma/client');
const { mbbsub, fbbsub, postoffice, courier_infra} = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    await prisma.mbbsubs.deleteMany();
    console.log('Deleted records in category table');

    await prisma.fbbsubs.deleteMany();
    console.log('Deleted records in category table');

    await prisma.postoffice.deleteMany();
    console.log('Deleted records in category table');

    await prisma.courier_infra.deleteMany();
    console.log('Deleted records in category table');

    await prisma.$queryRaw`ALTER TABLE mbbsubs AUTO_INCREMENT = 1`;
    console.log('reset MBB Subs auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE fbbsubs AUTO_INCREMENT = 1`;
    console.log('reset FBB Subs auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE postoffice AUTO_INCREMENT = 1`;
    console.log('reset POSTOFFICE auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE courier_infra AUTO_INCREMENT = 1`;
    console.log('reset Courier Infra auto increment to 1');

    await prisma.mbbsubs.createMany({
        data: mbbsub
    })
    console.log("MBB Data succesfully added"); 
       
    await prisma.fbbsubs.createMany({
      data: fbbsub
    })
    console.log("FBB Data succesfully added");

    await prisma.postoffice.createMany({
      data: postoffice
  })
  console.log("Post Office Data succesfully added");

  await prisma.courier_infra.createMany({
    data: courier_infra
})
console.log("Courier Infra Data succesfully added");

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();