import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert-component',
  templateUrl: './to-euro-convert-component.component.html',
  styleUrls: ['./to-euro-convert-component.component.css']
})
export class ToEuroConvertComponentComponent implements OnInit {
  @Input() montantP=0; 

  @Output() converted = new EventEmitter<number>();

  
  constructor() { }

  ngOnInit(): void {
  }
convertir(){
this.montantP=this.montantP/3;
this.converted.emit(this.montantP);

}
}
