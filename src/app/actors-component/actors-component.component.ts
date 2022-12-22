import { Component, OnInit } from '@angular/core';
import { Actor } from '../core/model/Actor';

@Component({
  selector: 'app-actors-component',
  templateUrl: './actors-component.component.html',
  styleUrls: ['./actors-component.component.css']
})
export class ActorsComponentComponent implements OnInit {
  listActors: Actor[]=[
    {'lastName':'Robert','firstName':'Julia'},
    {'lastName':'Walker','firstName':'Paul'},
    {'lastName':'Pitt','firstName':'Brad'}  
  ]
  Delete(element : any){
    this.listActors = this.listActors.filter(e => e != element);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
