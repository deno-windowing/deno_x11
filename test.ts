import { allocateAttributes, CWBackPixel, False, InputOutput, x11 } from "./mod.ts";
import { CString } from "./utils.ts";

console.log(x11);

const display = x11.XOpenDisplay(
  new TextEncoder().encode(Deno.env.get("DISPLAY") + "\0"),
);
const screen = x11.XDefaultScreen(display);
const root = x11.XRootWindow(display, screen);
const attributes = allocateAttributes({
  backgroundPixel: x11.XWhitePixel(display, screen),
});

const window = x11.XCreateWindow(
  display,
  root,
  0,
  0,
  400,
  300,
  0,
  0,
  InputOutput,
  null,
  CWBackPixel,
  attributes,
);
const title = CString("Hello World");

x11.XStoreName(display, window, title);

const wm_protocols_str = CString("WM_PROTOCOLS");
const wm_delete_window_str = CString("WM_DELETE_WINDOW");

const _wm_protocols = x11.XInternAtom(display, Deno.UnsafePointer.of(wm_protocols_str), False);
const wm_delete_window = x11.XInternAtom(display, Deno.UnsafePointer.of(wm_delete_window_str), False);

const protocols = new Uint8Array(8);
const view = new DataView(protocols.buffer);
view.setBigUint64(0, BigInt(wm_delete_window), true);

x11.XSetWMProtocols(
    display,
    window,
    Deno.UnsafePointer.of(protocols),
    protocols.byteLength,
);

x11.XMapWindow(display, window);


console.log("window:", window);

console.log("display:", display);
console.log("screen:", screen);
console.log("root:", root);

while (true) {
    x11.XNextEvent(display, null)
}

