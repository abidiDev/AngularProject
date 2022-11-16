export class Emploi{
    reference! : string;
    titre! :string;
    entreprise!:string;
    etat!:boolean;
 
    constructor(reference:string,titre:string,entreprise:string,etat:boolean){
        this.reference=reference;
        this.titre=titre;
        this.entreprise=entreprise;
        this.etat=etat;

    }
  }
