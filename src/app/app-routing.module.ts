import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';

const routes: Routes = [
  {path:'',redirectTo:'offreEmploi',pathMatch:'full'},
  {path:'offreEmploi',component:OffresEmploiComponentComponent},
  {path:'articles',component:ArticlesComponentComponent },
  {path:'form',component:TemplateDrivenFormComponentComponent },
  {path:'covertisseurP',component:ConvertisseurComponentComponent },
  {path:'convertisseurF',component:ToEuroConvertComponentComponent },
  {path:'actors',component:ActorsComponentComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
