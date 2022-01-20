import { Component,OnDestroy,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{

  data: number = 0;
  constructor(public route: Router) { }

  ngOnInit(): void {
    const obs$ = interval(5000);
    obs$.subscribe((d) => {
      console.log(d);
      this.data = d + 1;
      if (this.data == 2) {
        this.route.navigateByUrl("/users")
      }
      if(this.data == 3){
        this.route.navigateByUrl("/timer")
      }
      if(this.data == 4){
        this.route.navigateByUrl("/create")
      }
      // else(this.data == 5);{
      //   setTimeout(()=> {
      //   });
      // }
      if (this.data == 5) {
        clearInterval(d); // If exceeded 100, clear interval
    }
      // setTimeout(() => {
      //   this.data == 5
      // },1000); 
    });
    //  const ons$ = timer(2000,1000)
    //  ons$.subscribe((c) => {
    //    console.log(c);
    //    this.data = c
    //  })
  }
  // ngOnDestroy(): void {
  //   if(this.data == 5){
  //     clearInterval(this.data)
  //     console.log("detroyed timer");
  //   }
  // }
}
