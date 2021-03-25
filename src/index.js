"use strict";
exports.__esModule = true;
var Snake_1 = require("./Snake");
var Horse_1 = require("./Horse");
var sam = new Snake_1.Snake("Sammy the Python");
var tom = new Horse_1.Horse("Tommy the Palomino");
sam.move();
tom.move(34);
