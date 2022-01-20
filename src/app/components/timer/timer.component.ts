import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

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
      if(this.data == 5){
        clearInterval(this.data);
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

}
