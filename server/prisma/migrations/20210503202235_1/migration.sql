-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "facebookId" VARCHAR(255),
    "googleId" VARCHAR(255),
    "twitterId" VARCHAR(255),
    "email" VARCHAR(255),
    "username" VARCHAR(255),
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "roles" TEXT[],
    "givenName" VARCHAR(255),
    "familyName" VARCHAR(255),
    "city" VARCHAR(255),
    "country" VARCHAR(255),
    "caption" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.facebookId_unique" ON "User"("facebookId");

-- CreateIndex
CREATE UNIQUE INDEX "User.googleId_unique" ON "User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "User.twitterId_unique" ON "User"("twitterId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");
