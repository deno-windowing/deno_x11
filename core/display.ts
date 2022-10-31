import { x11 } from "./lib.ts";
import { ColorMap, Display, GC, Screen, XWindow } from "./types.ts";

/**
 * Both return a value with all bits set to 1 suitable for use in a plane argument toa procedure.
 */
export function AllPlanes() {
  return x11.symbols.XAllPlanes();
}

/**
 *  Both BlackPixel and WhitePixel can be used in implementing a monochrome
 * application. These pixel values are for permanently allocated entries in the default colormap.
 *  The actual RGB (red, green, and blue) values are settable on some screens and, in any case,
 *  may not actually be black or white. The names are intended to
 * convey the expected relative intensity of the colors.
 *  @param display Specifies the connection to the X server.
 *  @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function BlackPixel(display: Display, screenNumber: number) {
  return x11.symbols.XBlackPixel(display, screenNumber);
}

/**
 *  Both BlackPixel and WhitePixel can be used in implementing a monochrome
 * application. These pixel values are for permanently allocated entries in the default colormap.
 *  The actual RGB (red, green, and blue) values are settable on some screens and, in any case,
 *  may not actually be black or white. The names are intended to
 * convey the expected relative intensity of the colors.
 *  @param display Specifies the connection to the X server.
 *  @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function WhitePixel(display: Display, screenNumber: number) {
  return x11.symbols.XWhitePixel(display, screenNumber);
}

/**
 *  Both return a connection number for the specified display. On a POSIX-conformant system, this is the file descriptor of the connection.
 * @param display Specifies the connection to the X server.
 */
export function ConnectionNumber(display: Display) {
  return x11.symbols.XConnectionNumber(display);
}

/**
 * Both return the default colormap ID for allocation on the specified screen.
 * Most routine allocations of color should be made out of this colormap.
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DefaultColormap(
  display: Display,
  screenNumber: number,
): ColorMap {
  return x11.symbols.XDefaultColormap(display, screenNumber);
}

/**
 *  Both return the depth (number of planes) of the default root window for the specified screen.
 *  Other depths may also be supported on this screen (see MatchVisualInfo).
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DefaultDepth(
  display: Display,
  screenNumber: number,
) {
  return x11.symbols.XDefaultDepth(display, screenNumber);
}

/**
 * The XListDepths function returns the array of depths that are available on the
 * specified screen. If the specified screen_number is valid and sufficient memory
 * For the array can be allocated, XListDepths sets count_return to the number of available depths.
 * Otherwise, it does not set count_return and returns NULL.
 * To release the memory allocated for the array of depths, use XFree.
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 * @param countReturn Returns the number of depths.
 */
export function ListDepths(
  display: Display,
  screenNumber: number,
  countReturn: number,
) {
  return x11.symbols.XListDepths(display, screenNumber, countReturn);
}

/**
 *   Both return the default graphics context for the root window of the specified screen.
 *  This GC is created for the convenience of simple applications and contains
 * the default GC components with the foreground and background pixel values
 * initialized to the black and white pixels for the screen, respectively. You can modify
 * its contents freely because it is not used in any Xlib function. This GC should never be freed.
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DefaultGC(display: Display, screenNumber: number): GC {
  return x11.symbols.XDefaultGC(display, screenNumber);
}

/**
 * Both return the root window for the default screen.
 * @param display Specifies the connection to the X server.
 */
export function DefaultRootWindow(display: Display): XWindow {
  return x11.symbols.XDefaultRootWindow(display);
}

/**
 *  Both return a pointer to the default screen.
 * @param display Specifies the connection to the X server.
 */
 export function DefaultScreenOfDisplay(display: Display): Screen {
  return x11.symbols.XDefaultScreenOfDisplay(display);
}

/**
 * To open a connection to the server that controls a display
 */
export function OpenDisplay(displayName: string = Deno.env.get("DISPLAY")!) {
  return x11.symbols.XOpenDisplay(new TextEncoder().encode(displayName + "\0"));
}

/**
 *  Both return the default screen number referenced by the XOpenDisplay function.
 * This macro or function should be used to retrieve the screen number in applications
 * that will use only a single screen.
 * @param display
 * @returns
 */
export function DefaultScreen(display: Display) {
  return x11.symbols.XDefaultScreen(display);
}

/**
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DefaultVisual(display: Display, screenNumber: number) {
  return x11.symbols.XDefaultVisual(display, screenNumber);
}
