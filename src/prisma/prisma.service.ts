// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma-client/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient;
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    const adapter = new PrismaPg(this.pool);

    this.prisma = new PrismaClient({
      adapter,
    });
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
    await this.pool.end();
  }

  get client(): PrismaClient {
    return this.prisma;
  }

  // Expose common Prisma operations
  get report() {
    return this.prisma.report;
  }

  get curhat() {
    return this.prisma.curhat;
  }

  get user() {
    return this.prisma.user;
  }

  get counselorpsychologist() {
    return this.prisma.counselorpsychologist;
  }

  get role() {
    return this.prisma.role;
  }

  get profileMahasiswa() {
    return this.prisma.profileMahasiswa;
  }

  get article() {
    return this.prisma.article;
  }
}
