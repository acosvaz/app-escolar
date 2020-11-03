export class NuevoUsuario {
    nombre: string;
    username: string;
    password: string;
    tipo_user: string;

    constructor(nombre: string, username: string, password: string, tipo_user: string) {
        this.nombre = nombre;
        this.username = username;
        this.password = password;
        this.tipo_user = tipo_user; 
    }
}
