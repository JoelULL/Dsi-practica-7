/**
 * Clase contexto donde identificar los algoritmos:
 * Mergesort y bubblesort
 */
export declare class Solver {
    private data;
    private strategy;
    constructor(data: number[], strategy: Strategy);
    setStrategy(strategy: Strategy): void;
    logic(): void;
}
interface Strategy {
    execute(data: number[]): void;
}
export declare class BubbleSort implements Strategy {
    execute(data: number[]): void;
}
export declare class MergeSort implements Strategy {
    execute(data: number[]): void;
}
export {};
