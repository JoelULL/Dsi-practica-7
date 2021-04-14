"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = exports.BubbleSort = exports.Solver = void 0;
/**
 * Clase contexto donde identificar los algoritmos:
 * Mergesort y bubblesort
 */
class Solver {
    constructor(data, strategy) {
        this.data = data;
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    logic() {
        this.strategy.execute(this.data);
    }
}
exports.Solver = Solver;
class BubbleSort {
    execute(data) {
        let array = data.slice();
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        data = array;
        console.log(data);
    }
}
exports.BubbleSort = BubbleSort;
class MergeSort {
    execute(data) {
        console.log(divide(data));
        function divide(items) {
            let halfLength = Math.ceil(items.length / 2);
            let low = items.slice(0, halfLength);
            let high = items.slice(halfLength);
            if (halfLength > 1) {
                low = divide(low);
                high = divide(high);
            }
            return combine(low, high);
        }
        function combine(low, high) {
            let indexLow = 0;
            let indexHigh = 0;
            let lengthLow = low.length;
            let lengthHigh = high.length;
            let combined = [];
            while (indexLow < lengthLow || indexHigh < lengthHigh) {
                let lowItem = low[indexLow];
                let highItem = high[indexHigh];
                if (lowItem !== undefined) {
                    if (highItem === undefined) {
                        combined.push(lowItem);
                        indexLow++;
                    }
                    else {
                        if (lowItem <= highItem) {
                            combined.push(lowItem);
                            indexLow++;
                        }
                        else {
                            combined.push(highItem);
                            indexHigh++;
                        }
                    }
                }
                else {
                    if (highItem !== undefined) {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            }
            return combined;
        }
    }
}
exports.MergeSort = MergeSort;
