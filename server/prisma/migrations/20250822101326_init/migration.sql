-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."shops" (
    "shop_id" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "shops_pkey" PRIMARY KEY ("shop_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "public"."users"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "shops_shop_name_key" ON "public"."shops"("shop_name");

-- CreateIndex
CREATE INDEX "shops_user_id_idx" ON "public"."shops"("user_id");

-- AddForeignKey
ALTER TABLE "public"."shops" ADD CONSTRAINT "shops_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
