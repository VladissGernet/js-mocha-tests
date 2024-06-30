import mocha from './mocha.js';
import { runTest } from './run-test.js';
import { initFunction } from './function.js';

mocha.setup('bdd');
runTest(initFunction);
mocha.run();
