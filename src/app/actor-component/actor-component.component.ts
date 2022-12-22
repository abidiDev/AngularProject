import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../core/model/Actor';

@Component({
  selector: 'app-actor-component',
  templateUrl: './actor-component.component.html',
  styleUrls: ['./actor-component.component.css']
})
export class ActorComponentComponent implements OnInit {
@Input() actor!:Actor;
@Output() deleter = new  EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }
  delete(actorD : Actor){
    this.deleter.emit(actorD);
  }

}
