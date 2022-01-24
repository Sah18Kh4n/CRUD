import { ChangeDetectionStrategy, ChangeDetectorRef, Component,OnDestroy,OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { interval, Subject, Subscription, timer } from 'rxjs';

export interface Entry {
  created:Date;
  id:string;
}

export interface Timespan {
  hours:number;
  minutes:number;
  seconds:number;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit{

  data: number = 1;
  subscription!: Subscription
  changeDetector: any;
  constructor(public route: Router,
    changeDetector:ChangeDetectorRef) { }

    entries:Entry[] = [
      { id:'yesterday' ,created: new Date(new Date().getTime() - (24 * 1000 * 60 * 60) )},
      { id:'One Hour ago', created: new Date(new Date().getTime() - (1000 * 60 * 60) )},
      { id:'one minute ago', created: new Date(new Date().getTime() - (1000 * 60) )}
    ];
    newId!: string;

    private destroyed$ = new Subject();

  ngOnInit(): void {
      this.newId = 'first';
      this.addEntry();

      interval(1000).subscribe(() => {
        if(!this.changeDetector['Destroyed']){
          this.changeDetector.detectChanges();
        }
      });
      this.changeDetector.detectChanges();

    // const obs$ = interval(1000);
    // this.subscription = obs$.subscribe((d) => {
    //   console.log(d);
    //   this.data = d ;
      
    //   if (d == 2) {
    //     this.route.navigateByUrl("/users")
    //   }
    //   if(d == 3){
    //     this.route.navigateByUrl("/timer")
    //   }
    //   if(d == 4){
    //     this.route.navigateByUrl("/create")
    //   }
    //   else if(d >= 5)
    //   this.subscription.unsubscribe()

    //   if(d >= 5){
    //     this.subscription.unsubscribe()

    //     if (d == 2) {
    //       this.route.navigateByUrl("/users")
    //     }
    //     if(d == 3){
    //       this.route.navigateByUrl("/timer")
    //     }
    //     if(d == 4){
    //       this.route.navigateByUrl("/create")
    //     }
    //   }
    // });
    //  const ons$ = timer(2000,1000)
    //  ons$.subscribe((c) => {
    //    console.log(c);
    //    this.data = c
    //  })
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  addEntry() {
    this.entries.push({
      created: new Date(),
      id: this.newId
    });
    this.newId = '';
  }

  getElapsedTime(entry: Entry): Timespan {        
    let totalSeconds = Math.floor((new Date().getTime() - entry.created.getTime()) / 1000);
    
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds >= 3600) {
      hours = Math.floor(totalSeconds / 3600);      
      totalSeconds -= 3600 * hours;      
    }

    if (totalSeconds >= 60) {
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;
    
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  // ngOnDestroy(): void {
  //   if(this.data == 5){
  //     clearInterval(this.data)
  //     console.log("detroyed timer");
  //   }
  // }
}
