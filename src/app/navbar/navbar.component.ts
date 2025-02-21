import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
searchQuery:string = '';

performSearch(){
  if(this.searchQuery.trim()){
    console.log("You searched for: "+ this.searchQuery);
  }
  else{
    alert("Pls enter a search item");
  }
}
} 
