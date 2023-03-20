import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationGameComponent } from './calculation-game/calculation-game.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { ResultTableComponent } from './result-table/result-table.component';
import { CalculationComponent } from './calculation.component';
import { AccuracyTransformPipe } from 'src/app/shared/pipes/accuracy-transform.pipe';



@NgModule({
  declarations: [
    CalculationGameComponent, 
    ResultTableComponent, 
    CalculationComponent,
    AccuracyTransformPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class CalculationModule { }
