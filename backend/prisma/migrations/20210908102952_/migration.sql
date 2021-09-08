-- CreateTable
CREATE TABLE "Transaction_Table" (
    "id" SERIAL NOT NULL,
    "previous_ownerId" INTEGER NOT NULL,
    "new_ownerId" INTEGER NOT NULL,
    "listing" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction_Table" ADD FOREIGN KEY ("listing") REFERENCES "Listings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction_Table" ADD FOREIGN KEY ("previous_ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction_Table" ADD FOREIGN KEY ("previous_ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
