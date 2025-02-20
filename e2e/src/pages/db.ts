/* eslint-disable perfectionist/sort-classes */
import prisma from "../../prisma";

export default class DB {
  public async prismaConnect() {
    await prisma.$connect();
  }
  public async insertRoles(id: number, name: string, description: string) {
    await prisma.$queryRaw`INSERT INTO role (id, name, description)
VALUES (${id}, ${name}, ${description} );`;
  }
  public async fetchRoles(name: string) {
    await prisma.$queryRaw`SELECT * FROM role WHERE name=${name}`;
  }
  public async deleteRoles(name: string) {
    await prisma.$queryRaw`DELETE FROM role WHERE name = ${name};`;
  }
  public async close() {
    await prisma.$disconnect();
  }
}
