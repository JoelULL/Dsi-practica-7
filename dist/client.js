"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solver_1 = require("./solver");
const solver_2 = require("./solver");
const mySolver = new solver_1.Solver([2, 1, 4], new solver_2.BubbleSort());
mySolver.logic();
mySolver.setStrategy(new solver_2.BubbleSort());
mySolver.logic();
