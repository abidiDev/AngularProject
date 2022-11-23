export class Article {
    titre! :string;
    contenu!:string;
    auteur!:string;
    date!:string;
    categorie!:string;

    constructor(titre:string,contenu:string,auteur:string,date:string,categorie:string){
        this.titre=titre;
        this.contenu=contenu;
        this.auteur=auteur;
        this.date=date;
        this.categorie=categorie;

    }

}
