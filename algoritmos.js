import { Coche } from "./Coche.js";
import { Hombre } from "./Hombre.js";
import { Moto } from "./Moto.js";


const elAzul = new Coche("elAzul",1);
const carlos = new Hombre("carlos",0);
const flash = new Moto ("flash",1);
const manuel = new Hombre ("manuel",1)


carlos.subirAl(elAzul);
manuel.subirAl(flash);




