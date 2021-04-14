import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {BubbleSort} from '../src/solver';
import {MergeSort} from '../src/solver';

const mySolver = new Solver([7,12,20,1], new BubbleSort());

describe('BubbleSort test', () => {
    it('bubblesort [7,12,20,1] returns [1,7,12,20]', () => {
        mySolver.logic();
    });
});