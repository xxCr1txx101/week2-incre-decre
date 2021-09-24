import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'incre-decre',
  templateUrl: './incre-decre.component.html',
  styleUrls: ['./incre-decre.component.css']
})
export class IncreDecreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  defaultNum = 0;
  rndNumber = (Math.random() * 10).toFixed(0);

  
  Increment(){
    this.defaultNum =  this.defaultNum += Math.floor(Math.random( ) * 10);
    
  }
  Decrement(){
    this.defaultNum =  this.defaultNum -= Math.floor(Math.random( ) * 10);
  }

}
