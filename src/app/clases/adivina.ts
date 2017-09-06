export class Adivina {

    public nombre:string;
    public numeroSecreto:number=0;
    public numeroIngresado:number=0;
    public jugador:string;
    public gano:boolean=false;

    constructor(nom:string){
        this.nombre=nom;
    }

    public GenerarNumeroSecreto(){
        this.numeroSecreto =  Math.floor((Math.random() * 10) + 1);
        console.info("numero: ", this.numeroSecreto);
        this.gano=false;
    }

    public Verificar(){
        if(this.numeroSecreto==this.numeroIngresado){
            alert("GANO");
            this.gano=true;
        }
        else{
            alert("PERDIO");
            this.gano=false;
        }
        //lo borra despues de cada jugada
        this.numeroIngresado=null;
    }
}
