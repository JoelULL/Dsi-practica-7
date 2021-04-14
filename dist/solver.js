"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = exports.BubbleSort = exports.Solver = void 0;
/**
 * Clase contexto donde identificar los algoritmos:
 * Mergesort y bubblesort
 */
class Solver {
    /**
     * Constructor de la clase contexto que recibe como parametros:
     * @param data array numerico a ordenar
     * @param strategy la estrategia que en este caso es un algoritmo de ordenacion
     */
    constructor(data, strategy) {
        this.data = data;
        this.strategy = strategy;
    }
    /**
     * Metodo que utiliza la clase contexto para cambiar de estrategia
     * en este caso algoritmo de ordenacion
     * @param strategy estrategia a cambiar (algoritmo)
     */
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    /**
     * Metodo en el que la clase contexto permite a un objeto de la
     * interfaz Strategy realizar su algoritmo sobre data.
     * Donde data es el array numerico que le pasa el usuario
     */
    logic() {
        this.strategy.execute(this.data);
    }
}
exports.Solver = Solver;
/**
 * Primer algoritmo de ordenacion, BubbleSort.
 * Este algoritmo revisa cada elemento de la lista con
 * el que tiene a continuacion, si el que esta delante es mas
 * pequeño los intercambia. En cada iteracion del algoritmo
 * un elemento no sera evaluado porque no habran elementos a su derecha
 * mas grandes al estar ya ordenados con respecto a este numero
 */
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
        return data;
    }
}
exports.BubbleSort = BubbleSort;
/**
 * Segundo algoritmo de ordenacion, MergeSort.
 * Este algoritmo lo primero que hara es comprobar
 * que si la longitud del array es menor o igual que 1
 * Si esto es asi, significara que el array ya esta ordenado. El array
 * a ordenar se divide en dos mitades y cada es ordenada. Cada mitad ordenada
 * es combinada de forma ordenada obteniendo el array ordenado.
 */
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
