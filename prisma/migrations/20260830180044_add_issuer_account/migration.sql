/*
  Warnings:

  - Added the required column `issuer` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "issuer" TEXT;

-- Convert existing accounts to use 'database' issuer
UPDATE "Account" SET issuer = 'https://accounts.google.com' WHERE issuer IS NULL;

-- Make issuer NOT NULL
ALTER TABLE "Account" ALTER COLUMN "issuer" SET NOT NULL;
