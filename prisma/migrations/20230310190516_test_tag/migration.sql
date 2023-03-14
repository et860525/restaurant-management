-- AlterTable
CREATE SEQUENCE order_tag_seq START 1;
ALTER TABLE "Order" ADD COLUMN     "tag" TEXT NOT NULL DEFAULT lpad(nextval('order_tag_seq')::text, 6, '0');
