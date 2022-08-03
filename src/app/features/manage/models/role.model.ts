import { Permission } from './permission.model';

export interface Role {
    nombre_rol: string,
    rol_id: string,
    permisos: Permission[],
 }