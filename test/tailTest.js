//export the assertEqual function from another file.
const assertEqual = require("../assertEqual");
//export the tail function from another file.
const tail = require("../tail");


assertEqual(tail([5, 6, 7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail([]).length, 0);
