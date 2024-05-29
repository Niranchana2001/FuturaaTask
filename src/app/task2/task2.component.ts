import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component{
  pName = "";
  productList : string[] = []
  hideToggle: boolean = false;

  createProduct(){
    if (this.pName.trim() !== '') { 
      this.productList.push(this.pName); 
      this.pName = ''; 
      this.toggleParagraph();
    }
  }
  getStyle(index: number): object {
    if (index + 1 >= 15) {
      return { 'background-color': 'yellow' };
    } else if (index + 1 >= 10) {
      return { 'background-color': 'lightgreen' };
    }
    return {};
  }

  toggleParagraph() {
    this.hideToggle = (this.productList.length % 2 === 0);
  }
}
