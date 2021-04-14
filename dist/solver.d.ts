/**
 * Clase contexto donde identificar los algoritmos:
 * Mergesort y bubblesort
 */
export declare class Solver {
    private data;
    private strategy;
    /**
     * Constructor de la clase contexto que recibe como parametros:
     * @param data array numerico a ordenar
     * @param strategy la estrategia que en este caso es un algoritmo de ordenacion
     */
    constructor(data: number[], strategy: Strategy);
    /**
     * Metodo que utiliza la clase contexto para cambiar de estrategia
     * en este caso algoritmo de ordenacion
     * @param strategy estrategia a cambiar (algoritmo)
     */
    setStrategy(strategy: Strategy): void;
    /**
     * Metodo en el que la clase contexto permite a un objeto de la
     * interfaz Strategy realizar su algoritmo sobre data.
     * Donde data es el array numerico que le pasa el usuario
     */
    logic(): void;
}
/**
 * Interfaz que permite crear una estrategia.
 */
interface Strategy {
    execute(data: number[]): void;
}
/**
 * Primer algoritmo de ordenacion, BubbleSort.
 * Este algoritmo revisa cada elemento de la lista con
 * el que tiene a continuacion, si el que esta delante es mas
 * pequeño los intercambia. En cada iteracion del algoritmo
 * un elemento no sera evaluado porque no habran elementos a su derecha
 * mas grandes al estar ya ordenados con respecto a este numero
 */
export declare class BubbleSort implements Strategy {
    execute(data: number[]): number[];
}
/**
 * Segundo algoritmo de ordenacion, MergeSort.
 * Este algoritmo lo primero que hara es comprobar
 * que si la longitud del array es menor o igual que 1
 * Si esto es asi, significara que el array ya esta ordenado. El array
 * a ordenar se divide en dos mitades y cada es ordenada. Cada mitad ordenada
 * es combinada de forma ordenada obteniendo el array ordenado.
 */
export declare class MergeSort implements Strategy {
    execute(data: number[]): void;
}
export {};
