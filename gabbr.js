const config = {
	duration: 30, // in seconds
	sampleRate: 8000, // in hertz
	usePipeline: true // setting it to true might make it faster, i dunno
}

const fs = require('fs');
const pcm = require('./pcm');
console.log('Initializing... 1/3');
const { GPU } = require('gpu.js');
console.log('Initializing... 2/3');
const gpu = new GPU();

var expr = fs.readFileSync('expr.txt','utf8');
console.log('Initializing... 3/3');
const bb = gpu.createKernel(new Function('let t=this.thread.x;return ('+expr+');')).setOutput([config.sampleRate*config.duration]);
bb.setPipeline(config.usePipeline);

console.log('Rendering...');
console.time('Rendering');
var res = bb();
console.timeEnd('Rendering');

var data = [...(config.usePipeline ? bb().toArray() : bb())];
var the = new pcm({channels: 1, rate: config.sampleRate, depth: 8});
var wave = the.toWav(data);
console.log('Writing...');
fs.writeFileSync('out.wav',Buffer.from(wave));