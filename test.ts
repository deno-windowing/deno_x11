import { OpenDisplay, DefaultScreen, x11, AllPlanes } from "./mod.ts";

console.log(x11);

console.log(Deno.env.get("DISPLAY"))
console.log(AllPlanes())

const display = OpenDisplay();

const defaultScreen = DefaultScreen(display);

console.log(defaultScreen)
