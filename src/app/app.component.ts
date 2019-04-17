import { Component, ViewChild, ElementRef, OnInit, OnChanges } from '@angular/core';
import { AppService } from './app.service';
import { BarData } from './bar-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'TrackProgress';
  barData: BarData = null;
  currentWidth: number = 40;
  newWidth: number = null;
  progressBarValue: number[] = null;
  buttonValue: string[] = ['+20', '-20', '+40'];
  activeBarIndex: number = 0;
  @ViewChild('item0')itemzero: ElementRef;

  constructor(private appService: AppService){

  }

  ngOnInit(){
    this.appService.getBarData()
      .subscribe(data =>{
        this.barData = data;
        this.progressBarValue =this.barData.bars;
        console.log(this.barData);
      })
  }

  add(index: number){

    this.currentWidth = this.barData.bars[this.activeBarIndex]

    this.newWidth = (this.currentWidth + this.barData.buttons[index]);

    if(this.newWidth <= this.barData.limit && this.newWidth>=0){
      this.progressBarValue[this.activeBarIndex] = this.newWidth;
    }
  }

  changeProgressBar(e){
   var activeBar = parseInt(e.target.value);
   this.activeBarIndex = this.barData.bars.indexOf(activeBar);  
  }
}
