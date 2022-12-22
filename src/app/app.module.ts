import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
import { ToEuroConvertComponentComponent } from './to-euro-convert-component/to-euro-convert-component.component';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { ActorComponentComponent } from './actor-component/actor-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponentComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponentComponent,
    TemplateDrivenFormComponentComponent,
    ToEuroConvertComponentComponent,
    ConvertisseurComponentComponent,
    ActorsComponentComponent,
    ActorComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
