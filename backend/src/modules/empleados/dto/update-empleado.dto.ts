import {
  IsString,
  IsOptional,
  IsUUID,
  IsDateString,
  IsEnum,
  MinLength,
} from 'class-validator';
import { EstadoEmpleado } from '@prisma/client';

export class UpdateEmpleadoDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  nombres?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  apellidos?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsDateString()
  @IsOptional()
  fechaNacimiento?: string;

  @IsDateString()
  @IsOptional()
  fechaIngreso?: string;

  // Solo permite valores del enum: ACTIVO, INACTIVO, etc.
  @IsEnum(EstadoEmpleado)
  @IsOptional()
  estado?: EstadoEmpleado;

  @IsUUID()
  @IsOptional()
  departamentoId?: string;
}