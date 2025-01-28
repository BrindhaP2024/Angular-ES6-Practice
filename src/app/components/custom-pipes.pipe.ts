import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {
  transform(value:string):string{
    if(!value) return '';
    return value.split('').reverse().join('');
  }
  }


