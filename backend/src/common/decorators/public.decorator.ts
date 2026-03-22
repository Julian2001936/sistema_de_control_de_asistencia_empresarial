import { SetMetadata } from '@nestjs/common';

// Esta es la "etiqueta" que marcará los endpoints públicos
export const IS_PUBLIC_KEY = 'isPublic';

// @Public() es un decorador que pega esa etiqueta en el endpoint
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);