import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  counter: number =1;
  timer: number;

  constructor() { }

  ngOnInit(): void {

    this.slideFunction(this.counter);

  }


  //Function handling the slider
  slideFunction(slideNumber: number): void{
    var mySlides = <NodeListOf<HTMLElement>>document.querySelectorAll(".mySlide");
    var myDots = <NodeListOf<HTMLElement>>document.querySelectorAll(".dot");




    mySlides.forEach(element => {

      element.style.display = "none";
      
    });

    myDots.forEach(element =>{
      element.classList.remove("active-dot");
    })

    if(slideNumber > mySlides.length){
      this.counter = 1;
    }

    if(slideNumber < 1){
      this.counter = mySlides.length;
    }

    mySlides[this.counter - 1].style.display ="block";

    myDots[this.counter - 1].classList.add("active-dot");

  }

  //chage slide to the next slide after 8 secondes 
  autoSlide() {
    this.counter += 1;
    //console.log("auto work");
    //this.slideFunction(this.counter);
  }

   //Show the next or prev slide when click on plus or minus sign arrows
   clickOnArrow(num: number): any{
    this.counter += num;
    this.slideFunction(this.counter);
    this.resetTimer();
  }

  //Show corresponding clicked dot 
  currentSlide(slideNumber: number):any{
    this.counter = slideNumber;

    this.slideFunction(this.counter);
    this.resetTimer();

  }

  //reset the timer to 0 and relaunch the autoSlide funtion
  resetTimer():void{
    clearInterval(this.timer);
    this.timer = setInterval(this.autoSlide,8000);
  }





}
