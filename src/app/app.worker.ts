/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  // Perform computation with the received data
  const result = data.map((item: number) => item * 2);
  // Post the result back to the main thread
  postMessage(result);
});
