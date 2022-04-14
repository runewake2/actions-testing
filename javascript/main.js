const core = require('@actions/core');

const nameToGreet = core.getInput('doc');
console.log(`Hello Javascript Actions! Doc is ${nameToGreet}`);