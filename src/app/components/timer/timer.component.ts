import { Component,OnDestroy,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{

  data: number = 1;
  subscription!: Subscription
  constructor(public route: Router) { }

  ngOnInit(): void {
    const obs$ = interval(1000);
    this.subscription = obs$.subscribe((d) => {
      console.log(d);
      this.data = d ;
      
      // if (d == 2) {
      //   this.route.navigateByUrl("/users")
      // }
      // if(d == 3){
      //   this.route.navigateByUrl("/timer")
      // }
      // if(d == 4){
      //   this.route.navigateByUrl("/create")
      // }
      // else if(d >= 5)
      // this.subscription.unsubscribe()

      if(d >= 5){
        this.subscription.unsubscribe()

        // if (d == 2) {
        //   this.route.navigateByUrl("/users")
        // }
        // if(d == 3){
        //   this.route.navigateByUrl("/timer")
        // }
        // if(d == 4){
        //   this.route.navigateByUrl("/create")
        // }
      }
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
