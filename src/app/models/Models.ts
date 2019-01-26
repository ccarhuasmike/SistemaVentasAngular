export interface tb_usuario {
    tx_nombre: number;
    tx_apellido_paterno: number;
    tx_apellido_materno: string;
    tx_email: string;
    tx_login: string;
    tx_password: string;
}
export interface EntidadBase {
    Id: number;
    IdUsuario_crea: number;
    dt_fe_crea: string;
    IdUsuario_mod: number;
    dt_fe_mod: string;
    IdEstado_reg: number;
}

export interface Pagination {
    CurrentPage: number;
    ItemsPerPage: number;
    TotalItems: number;
    TotalPages: number;
}
export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}