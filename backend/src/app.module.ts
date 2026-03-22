import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule, // registramos Prisma aquí una sola vez
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}