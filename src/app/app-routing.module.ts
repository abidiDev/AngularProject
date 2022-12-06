import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const routes: Routes = [
  {path:'',redirectTo:'offreEmploi',pathMatch:'full'},
  {path:'offreEmploi',component:OffresEmploiComponentComponent},
  {path:'articles',component:ArticlesComponentComponent },
  {path:'form',component:TemplateDrivenFormComponentComponent }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
