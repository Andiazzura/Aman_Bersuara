/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "created_at",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
DROP COLUMN "user_id",
DROP COLUMN "username",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "id_role" TEXT,
ADD COLUMN     "id_user" TEXT NOT NULL,
ADD COLUMN     "username / email" TEXT,
ALTER COLUMN "password" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id_user");

-- CreateTable
CREATE TABLE "report" (
    "id_report" TEXT NOT NULL,
    "id_user(pelapor)" TEXT,
    "category" TEXT,
    "chronology" TEXT,
    "bukti(file)" TEXT,
    "status" TEXT,
    "created_at" TEXT,

    CONSTRAINT "report_pkey" PRIMARY KEY ("id_report")
);

-- CreateTable
CREATE TABLE "Curhat" (
    "id_curhat" TEXT NOT NULL,
    "id_user" TEXT,
    "id_psychologist" TEXT,
    "message" TEXT,
    "timstamp" TEXT,

    CONSTRAINT "Curhat_pkey" PRIMARY KEY ("id_curhat")
);

-- CreateTable
CREATE TABLE "Counselorpsychologist" (
    "id_user" TEXT NOT NULL,
    "name_psikolog / konselor" TEXT,
    "jwork_schedule" TEXT,
    "status" TEXT,
    "work_experiance" TEXT,
    "specialization" TEXT,

    CONSTRAINT "Counselorpsychologist_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Role" (
    "id_role" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "ProfileMahasiswa" (
    "id_user" TEXT NOT NULL,
    "name_mahasiswa" TEXT,
    "no_telphone" TEXT,
    "gender" TEXT,

    CONSTRAINT "ProfileMahasiswa_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Article" (
    "id_article" TEXT NOT NULL,
    "title" TEXT,
    "category" TEXT,
    "content" TEXT,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id_article")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_id_report_key" ON "report"("id_report");

-- CreateIndex
CREATE UNIQUE INDEX "Curhat_id_curhat_key" ON "Curhat"("id_curhat");

-- CreateIndex
CREATE UNIQUE INDEX "Counselorpsychologist_id_user_key" ON "Counselorpsychologist"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_role_key" ON "Role"("id_role");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileMahasiswa_id_user_key" ON "ProfileMahasiswa"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_article_key" ON "Article"("id_article");
