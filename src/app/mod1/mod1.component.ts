import { DatePipe, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { PhonePipe } from './phone.pipe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  providers: [DatePipe, SlicePipe]
})
export class Mod1Component implements OnInit {

  date = Date.now();

  money: number = 5054;

  perc: number = 99;

  pi: number = 3.141592653589793238462643383279502884197693993751058209749445923078164;

  textHello: string = 'Hello, World';

  phone: Observable<string> | undefined;

  phones: string[] = ['9835313747','9835313748','9835313749','9835313710','9835313744','9835313743','9835313742','9835313744','9835313747','9835313747','9835313747'];

  constructor(private datePipe: DatePipe, private slicePipe: SlicePipe, private phonePipe: PhonePipe) {
    console.log('app-mod1', datePipe.transform(this.date,'dd-MMMM-YYYY HH:MM:SS')); 
    console.log('app-mod1', slicePipe.transform(this.textHello,3,10)); 

  }

  ngOnInit(): void {
    this.blackBox();
  }

  get dateNow(): string{
    return this.datePipe.transform(this.date, 'dd-MMMM-YYYY HH:MM:SS');
  }

  get textGet():string {
    return this.slicePipe.transform(this.textHello, 3,5);
  }
  
  get getPhones():string {
    return this.phonePipe.transform(this.phones);
  }

  blackBox() {
    this.phone = interval(500).pipe(map((i:number)=> this.phones[i]));
  }

  blackBoxI() {
    this.phone = interval(500).pipe(map((i:number)=> i?.toString()));
  }

}
