import { Coche } from "./Coche.js";
import { Hombre } from "./Hombre.js";
import { Moto } from "./Moto.js";


const elAzul = new Coche("elAzul",1);
const flash = new Moto ("flash",1);


const personas= [
    new Hombre ("carlos",0),
    new Hombre ("juan",1)
]

personas[1].subirAl(elAzul);
personas[0].subirAl(flash);




