import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IResult } from '../../../shared/store/results-store/results.interface';
import {eventDispatcher} from '../../../shared/store/results-store/result-store';
import { ActionTypes } from '../../../shared/store/results-store/actions';

@Component({
  selector: 'app-calculation-game',
  templateUrl: './calculation-game.component.html',
  styleUrls: ['./calculation-game.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationGameComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  result: number | undefined;
  max: number = 99;
  resultObj: IResult =  {
    result: '',
    accuracy: false
};

  constructor() { }

  ngOnInit(): void {
    this.generateRandomNumbers();
  }

  generateRandomNumbers(){
    this.num1 = Math.floor(Math.random() * this.max);
    this.num2 = Math.floor(Math.random() * this.max);
  }

  checkResult(){
    this.resultObj.result = this.num1 + " + " + this.num2 + " = " + this.result;
    if(this.num1 + this.num2 == this.result){
      this.resultObj.accuracy = true;
      this.generateRandomNumbers();
    }
    else{
      this.resultObj.accuracy = false;
    }
    eventDispatcher.next({type: ActionTypes.CREATE_RESULT, payload: this.resultObj});
  }

  resetState() {
    this.resultObj = {
      result: '',
      accuracy: false
    };
    this.result = undefined;
  }

}
