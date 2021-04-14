import {Solver} from './solver'
import {BubbleSort} from './solver'

const mySolver = new Solver([2, 1, 4], new BubbleSort());
mySolver.logic();

mySolver.setStrategy(new BubbleSort());
mySolver.logic();