import { Component, OnInit } from '@angular/core';
import  { Element } from './element.model';
import  { tableOfElements } from './table-of-elements.model';
	
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chemical Formula 1';
  subtitle = 'The Fastest Chemical Equation Balancer';
  elements = new Map();
  carbon: Element;
  chemicalEquation: string = "";
  tableOfElements = tableOfElements;
  ngOnInit(){
    tableOfElements.forEach(e=> { this.elements.set(e.symbol, e);});
    this.carbon = this.elements.get("C");
    
  }
  debug(){
    debugger;
  }
}
