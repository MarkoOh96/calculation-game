import {Component, OnInit} from '@angular/core';
import {eventDispatcher, InitialState, store} from '../../../shared/store/results-store/result-store';
import {ActionTypes} from '../../../shared/store/results-store/actions';
import { IResult } from 'src/app/shared/store/results-store/results.interface';
import { Observable, tap, map } from 'rxjs';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  displayedColumns: string[] = ['result', 'accuracy'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: Observable<IResult[]>;

  constructor() {
    this.data = store.pipe(map((state: InitialState) => state.results as IResult[]))
  }

  ngOnInit(): void {
    eventDispatcher.next({type: ActionTypes.GET_RESULTS});
  }

  isBoolean(value: any): boolean{
   return typeof value === 'boolean';
  }

}
