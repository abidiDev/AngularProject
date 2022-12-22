import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur-component',
  templateUrl: './convertisseur-component.component.html',
  styleUrls: ['./convertisseur-component.component.css']
})
export class ConvertisseurComponentComponent implements OnInit {

  montant : number = 0;

  montantFromChild=0;

  convertDinarEuro(montantP: any) {
    this.montantFromChild=montantP;
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
