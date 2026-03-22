import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Injectable()
export class EmpleadosService {
  constructor(private readonly prisma: PrismaService) {}

  // ── OBTENER TODOS ──────────────────────────────
  async findAll() {
    return this.prisma.empleado.findMany({
      where: { estado: 'ACTIVO' },
      orderBy: { apellidos: 'asc' },
      // include trae datos relacionados en la misma consulta
      include: {
        departamento: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });
  }

  // ── OBTENER UNO POR ID ─────────────────────────
  async findOne(id: string) {
    const empleado = await this.prisma.empleado.findUnique({
      where: { id },
      include: {
        departamento: true,
      },
    });

    if (!empleado) {
      throw new NotFoundException(
        `Empleado con id ${id} no encontrado`
      );
    }

    return empleado;
  }

  // ── CREAR ──────────────────────────────────────
  async create(dto: CreateEmpleadoDto) {
    // Verificar cédula duplicada
    const cedulaExiste = await this.prisma.empleado.findUnique({
      where: { cedula: dto.cedula },
    });

    if (cedulaExiste) {
      throw new ConflictException(
        `Ya existe un empleado con la cédula ${dto.cedula}`
      );
    }

    // Verificar que el departamento existe
    const departamento = await this.prisma.departamento.findUnique({
      where: { id: dto.departamentoId },
    });

    if (!departamento) {
      throw new NotFoundException(
        `Departamento con id ${dto.departamentoId} no encontrado`
      );
    }

    return this.prisma.empleado.create({
      data: {
        nombres:        dto.nombres,
        apellidos:      dto.apellidos,
        cedula:         dto.cedula,
        telefono:       dto.telefono,
        fechaNacimiento: dto.fechaNacimiento
          ? new Date(dto.fechaNacimiento)
          : null,
        fechaIngreso:   new Date(dto.fechaIngreso),
        departamentoId: dto.departamentoId,
      },
      include: {
        departamento: {
          select: { id: true, nombre: true },
        },
      },
    });
  }

  // ── ACTUALIZAR ─────────────────────────────────
  async update(id: string, dto: UpdateEmpleadoDto) {
    // Verificar que el empleado existe
    await this.findOne(id);

    // Si cambia de departamento, verificar que el nuevo existe
    if (dto.departamentoId) {
      const departamento = await this.prisma.departamento.findUnique({
        where: { id: dto.departamentoId },
      });

      if (!departamento) {
        throw new NotFoundException(
          `Departamento con id ${dto.departamentoId} no encontrado`
        );
      }
    }

    return this.prisma.empleado.update({
      where: { id },
      data: {
        ...dto,
        fechaNacimiento: dto.fechaNacimiento
          ? new Date(dto.fechaNacimiento)
          : undefined,
        fechaIngreso: dto.fechaIngreso
          ? new Date(dto.fechaIngreso)
          : undefined,
      },
      include: {
        departamento: {
          select: { id: true, nombre: true },
        },
      },
    });
  }

  // ── DESACTIVAR (soft delete) ───────────────────
  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.empleado.update({
      where: { id },
      data: { estado: 'INACTIVO' },
    });
  }
}