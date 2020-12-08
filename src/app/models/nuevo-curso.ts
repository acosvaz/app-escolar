export class NuevoCurso {
    maestro_id: string;
    nombre_curso: string;

    constructor(maestro_id: string, nombre_curso: string) {
        this.maestro_id = maestro_id;
        this.nombre_curso = nombre_curso;
    }
}