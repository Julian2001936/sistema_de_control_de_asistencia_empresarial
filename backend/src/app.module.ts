import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartamentosModule } from './modules/departamentos/departamentos.module';
import { EmpleadosModule } from './modules/empleados/empleados.module';

@Module({
  imports: [
    PrismaModule,
    DepartamentosModule,
    EmpleadosModule, // ← agregamos esto
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}