import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accuracyTransform'
})
export class AccuracyTransformPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    if(value){
      return "correct!";
    }
    return "wrong!";
  }

}
