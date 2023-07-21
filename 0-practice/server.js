const { performance } = require('perf_hooks');
const { EventEmitter } = require('events');

class ProfilerMiddleware {
  constructor() {
    this.events = new EventEmitter();
  }

  startProfiling(req, res, next) {
    const startTime = performance.now();
    this.events.emit('request:start', startTime);

    res.on('finish', () => {
      const endTime = performance.now();
      this.events.emit('request:end', endTime);
    });

    next();
  }

  enableProfiler() {
    this.events.on('request:start', (startTime) => {
      console.log(`Request started at ${new Date().toISOString()}.`);
      console.log(`Start time: ${startTime}`);
    

        this.events.on('request:end', (endTime) => {
        console.log(`Request ended at ${new Date().toISOString()}.`);
        console.log(`End time: ${endTime}`);

        const elapsedTime = endTime - startTime;
        console.log(`Elapsed time: ${elapsedTime} milliseconds.`);
        });
    });
  }
}

// Example of usage with Express.js
const express = require('express');
const app = express();

const profilerMiddleware = new ProfilerMiddleware();
app.use(profilerMiddleware.startProfiling.bind(profilerMiddleware));
profilerMiddleware.enableProfiler();

app.get('/', (req, res) => {
  // Simulate some work
  setTimeout(() => {
    res.send('Hello World!');
  }, 1000);
});

app.listen(8080, () => {
  console.log('Server is running on port 3000');
});
