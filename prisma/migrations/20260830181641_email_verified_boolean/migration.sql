ALTER TABLE "User"
ADD COLUMN "emailVerified_new" BOOLEAN NOT NULL DEFAULT false;

UPDATE "User"
SET "emailVerified_new" = ("emailVerified" IS NOT NULL);

ALTER TABLE "User"
DROP COLUMN "emailVerified";

ALTER TABLE "User"
RENAME COLUMN "emailVerified_new" TO "emailVerified";