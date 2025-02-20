/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import prisma from "../../prisma";
import { DbTest as test } from "../fixtures/db.fixture";

test("prisma", async ({}) => {
  console.log(JSON.stringify(await prisma.role.findMany()));
});
test("@DB insert and delete", async ({ Db }) => {
  await Db.prismaConnect();
  await Db.insertRoles(1, "Tester", "Test Automator");
  await Db.fetchRoles("Tester");
  await Db.deleteRoles("Tester");
  await Db.close();
});
