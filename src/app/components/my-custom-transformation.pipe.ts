import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomTransformation' // Name of the pipe
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string, format: string = 'default'): string {
    let msg = `My custom transformation of ${value}.`;
    if (format === 'uppercase') {
      return msg.toUpperCase(); // Apply uppercase transformation
    } else {
      return msg; // Default case (no transformation)
    }
  }
}
