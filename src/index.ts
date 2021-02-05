import { Student } from "./student";
import { Internship } from "./internship";
import { Map } from "./map";
import faker from "faker";

console.log("hello");

const student: Student = new Student(); //call constructor to use 
const internship: Internship = new Internship();
const map = new Map ("map");

map.addPin(student);
map.addPin(internship);
