import { Component, OnInit } from '@angular/core';
import {Adivina} from '../../clases/adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  public juegoAdivina:Adivina;

  constructor() { 
    this.juegoAdivina=new Adivina("Juego Adivina");
  }

  ngOnInit() {
  }

}
