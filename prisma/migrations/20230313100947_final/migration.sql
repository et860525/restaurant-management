/*
  Warnings:

  - You are about to drop the column `price` on the `OrderItem` table. All the data in the column will be lost.
  - Made the column `email` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "tag" SET DEFAULT lpad(nextval('order_tag_seq')::text, 6, '0');

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "price";
