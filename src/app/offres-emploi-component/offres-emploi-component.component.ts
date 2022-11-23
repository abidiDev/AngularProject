import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';


@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

 listeEmploi:Array<Emploi>=[new Emploi("123","developpeur Java","vermeg",false),new Emploi("124","developpeur php","vermeg",false),new Emploi("123","developpeur .net","inetum",true),new Emploi("123","developpeur Java","inetum",false),new Emploi("123","developpeur Java","inetum",false),new Emploi("123","developpeur Java","inetum",false),new Emploi("123","developpeur Java","sopra",false),new Emploi("123","developpeur Java","sopra",true)];
 nbrDePosteDispo!: number;
 nomEntreprise='';
calculNbrDePosteDispo(listeEmploi:Array<Emploi>){
  this.nbrDePosteDispo=0;
  
  listeEmploi.forEach(Emploi => {
    if (Emploi.etat==true) {
      this.nbrDePosteDispo++;
      
    }
    
  });

  return this.nbrDePosteDispo ;
}
filter(nomEntreprise:string){
  this.nomEntreprise=nomEntreprise;
}


  constructor() { }

  ngOnInit(): void {
  }

}
