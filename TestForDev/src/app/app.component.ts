import { Component, OnInit } from '@angular/core';
import { AllapiService } from './allapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  day:any = {sun:[],mon:[],tue:[],wed:[],thu:[],fri:[],sat:[]};
  
  constructor(private test: AllapiService) { }

  async ngOnInit() {
    let daylist = await this.test.getTest();
    // console.log(daylist)
      var obj = Object.keys(daylist).length;
      for (let i = 0; i < obj; i++) {
        var d = new Date(daylist[i].birthday.mdy);
        var day = d.getDay();
        var dayofbirth = null;
        switch (day) {
          case 0:
            dayofbirth = "Sunday";
            this.day.sun.push(daylist[i])
            break;
          case 1:
            dayofbirth = "Monday";
            this.day.mon.push(daylist[i])
            break;
          case 2:
            dayofbirth = "Tuesday";
            this.day.tue.push(daylist[i])
            break;
          case 3:
            dayofbirth = "Wednesday";
            this.day.wed.push(daylist[i])
            break;
          case 4:
            dayofbirth = "Thursday";
            this.day.thu.push(daylist[i])
            break;
          case 5:
            dayofbirth = "Friday";
            this.day.fri.push(daylist[i])
            break;
          case 6:
            dayofbirth = "Saturday";
            this.day.sat.push(daylist[i])
        }
        // console.log(dayofbirth);
      }
      // console.log(this.day);
  }
}
