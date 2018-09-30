
export class Todo {
    
    id: number;
    texto: string;
    completado: boolean;

    constructor( texto: string ){

        // primer letra en mayuscula
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;

        this.id = Math.random();

        // console.log(this.texto, this.id, this.completado);

    }

}