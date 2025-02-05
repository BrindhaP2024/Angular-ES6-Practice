import { Component } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  imports: [],
  templateUrl: './web-worker.component.html',
  styleUrl: './web-worker.component.css'
})
export class WebWorkerComponent {
  message: string = '';

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new worker
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`Page got message: ${data}`);
        this.updateMessage(data);
      };

      // Send data to the worker (array of numbers from 1 to 10,000)
      const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);
      worker.postMessage(numbers);
    } else {
      // Web workers are not supported in this environment
      console.log('Web workers are not supported');
    }
  }

  updateMessage(data: any) {
    if (Array.isArray(data)) {
      this.message = `Web worker processed data: ${data.slice(0, 10).join(', ')} ...`; // Display only the first 10 results
    } else {
      this.message = `Unexpected data format: ${JSON.stringify(data)}`;
    }
  }
}
