"use server";

import db from "@/db/db";
import { string } from "zod";

export async function userOrderExists(email: string, productId: string) {
  return (
    (await db.order.findFirst({
      where: { user: { email }, productId: productId },
      select: { id: true },
    })) != null
  );
}
