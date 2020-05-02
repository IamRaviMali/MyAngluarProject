import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title: string = 'Angular Tutorial!';
  constructor()
  {
  console.log("I am constructor.");

  }
  ngOnChanges( ) 
  {
    console.log("I am from the On Changes Event.");
  }
  ngOnInit()
  {
    console.log("I am from Initialize Event.")
  }

}
