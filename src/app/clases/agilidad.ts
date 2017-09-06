export class Agilidad {

    public nombre: string;
    public numeroUno: number = 0;
    public numeroDos: number = 0;
    public operador: any = 0;
    public resultado: number = 0;
    public numeroIngresado: number = 0;
    public jugador: string;
    public gano: boolean = false;

    constructor(nom: string) {
        this.nombre = nom;
    }

    public generarOperacion() {
        this.numeroUno = Math.floor((Math.random() * 10) + 1);
        this.numeroDos = Math.floor((Math.random() * 10) + 1);
        this.operador = Math.floor((Math.random() * 4) + 1);
        console.info("uno: ", this.numeroUno);
        console.info("dos: ", this.numeroDos);
        console.info("operador: ", this.operador);

        if (this.operador == 1) {
            this.operador = "+";
            this.resultado = this.numeroUno + this.numeroDos;
            console.info("resultado: ", this.resultado);
        }
        else if (this.operador == 2) {
            this.operador = "-";
            this.resultado = this.numeroUno - this.numeroDos;
            console.info("resultado: ", this.resultado);
        }
        else if (this.operador == 3) {
            this.operador = "%";
            this.resultado = this.numeroUno / this.numeroDos;
            console.info("resultado: ", this.resultado);
        }
        else if (this.operador == 4) {
            this.operador = "x";
            this.resultado = this.numeroUno * this.numeroDos;
            console.info("resultado: ", this.resultado);
        }
        this.gano = false;
    }

    public Verificar() {
        if (this.resultado == this.numeroIngresado) {
            this.gano = true;
            alert("GANOO!!!");
        }
        else
            alert("PERDIO!!!");   
        this.numeroIngresado=null;
    }
}
