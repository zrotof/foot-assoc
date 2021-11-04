import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  isBurgerMenuClicked: boolean = false;
  counter: number = 1;
  timer: number;


  constructor() { }

  ngOnInit(): void {

  }

  //Handling click on burger menu
  onBurgerMenu(){
    var navSmallScreen = <HTMLElement>document.querySelector('.header-right');
    var inputstatus = <HTMLInputElement>document.querySelector('.burger input');

    // À chaque clique sur l'input on vérifie si l'input est cochée
    if(inputstatus.checked === true){
      
      navSmallScreen.classList.toggle("toggle-nav")

      this.isBurgerMenuClicked = true;

    }
    else{
      navSmallScreen.classList.toggle("toggle-nav");
      
    }
  }


}
