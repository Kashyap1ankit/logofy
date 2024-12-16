/*
  Warnings:

  - Made the column `prompt` on table `History` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "History" ALTER COLUMN "prompt" SET NOT NULL;
