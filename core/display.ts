import { x11 } from "./lib.ts";
import { ColorMap, Display, GC, Screen, Visual, XWindow } from "./types.ts";

/**
 * To open a connection to the server that controls a display
 * @param displayName The name of the display
 */
export function OpenDisplay(displayName: string = Deno.env.get("DISPLAY")!) {
  return x11.symbols.XOpenDisplay(new TextEncoder().encode(displayName + "\0"));
}

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
 * return a pointer to the indicated screen.
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function ScreenOfDisplay(
  display: Display,
  screenNumber: number,
): Screen {
  return x11.symbols.XScreenOfDisplay(display, screenNumber);
}

/**
 *  Both return the default screen number referenced by the XOpenDisplay function.
 * This macro or function should be used to retrieve the screen number in applications
 * that will use only a single screen.
 * @param display Specifies the connection to the X server.
 */
export function DefaultScreen(display: Display) {
  return x11.symbols.XDefaultScreen(display);
}

/**
 * Both return the default visual type for the specified screen.
 *  For further information about visual types, see section 3.1
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DefaultVisual(display: Display, screenNumber: number): Visual {
  return x11.symbols.XDefaultVisual(display, screenNumber);
}

/**
 * return the number of entries in the default colormap.
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DisplayCells(display: Display, screenNumber: number): Visual {
  return x11.symbols.XDisplayCells(display, screenNumber);
}

/**
 * return the depth of the root window of the specified screen.
 * For an explanation of depth, see the glossary.
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function DisplayPlanes(display: Display, screenNumber: number): Visual {
  return x11.symbols.XDisplayPlanes(display, screenNumber);
}

/**
 * Both return the string that was passed to XOpenDisplay when the current display was opened.
 * On POSIX-conformant systems, if the passed string was NULL,]
 * these return the value of the DISPLAY environment variable when the current display was opened.
 * These are useful to applications that invoke the fork system call and want
 * to open a new connection to the same display from the child process as well as for
 * printing error messages.
 * @param display Specifies the connection to the X server.
 */
export function DisplayString(display: Display) {
  return x11.symbols.XDisplayString(display);
}

/**
 * The XExtendedMaxRequestSize function returns zero
 * if the specified display does not support
 * an extended-length protocol encoding; otherwise, it returns the maximum request size (in 4-byte units)
 * supported by the server using the extendedlength encoding.
 * @param display Specifies the connection to the X server.
 */
export function ExtendedMaxRequestSize(display: Display) {
  return x11.symbols.XExtendedMaxRequestSize(display);
}

/**
 * The XMaxRequestSize function returns the maximum request size (in 4-byte units)
 * supported by the server without using an extended-length protocol encoding.
 * @param display Specifies the connection to the X server.
 */
export function MaxRequestSize(display: Display) {
  return x11.symbols.XMaxRequestSize(display);
}

/**
 * extract the full serial number of the last request known by Xlib to have been
 * processed by the X server. Xlib automatically sets this number when replies, events,
 * and errors are received.
 * @param display Specifies the connection to the X server.
 */
export function LastKnownRequestProcessed(display: Display) {
  return x11.symbols.XLastKnownRequestProcessed(display);
}

/**
 * extract the full serial number that is to be used for the next request.
 * Serial numbers are maintained separately for each display connection.
 * @param display Specifies the connection to the X server.
 */
export function NextRequest(display: Display) {
  return x11.symbols.XNextRequest(display);
}

/**
 * return the major version number (11) of the X protocol associated
 * with the connected display
 * @param display Specifies the connection to the X server.
 */
export function ProtocolVersion(display: Display) {
  return x11.symbols.XProtocolVersion(display);
}

/**
 * return the minor protocol revision number of the X server.
 * @param display Specifies the connection to the X server.
 */
export function ProtocolRevision(display: Display) {
  return x11.symbols.XProtocolRevision(display);
}

/**
 * return the length of the event queue for the connected display
 * @param display Specifies the connection to the X server.
 */
export function QLength(display: Display) {
  return x11.symbols.XQLength(display);
}

/**
 * return the root window. These are useful with functions that need a drawable
 * of a particular screen and for creating top-level windows
 * @param display Specifies the connection to the X server.
 * @param screenNumber Specifies the appropriate screen number on the host server.
 */
export function RootWindow(display: Display, screenNumber: number): XWindow {
  return x11.symbols.XRootWindow(display, screenNumber);
}

/**
 * return the number of available screens.
 * @param display Specifies the connection to the X server.
 */
export function ScreenCount(display: Display) {
  return x11.symbols.XScreenCount(display);
}

/**
 * Both return a pointer to a null-terminated string that provides some identification
 * of the owner of the X server implementation. If the data returned by the server is
 * in the Latin Portable Character Encoding, then the string is in the Host Portable
 * Character Encoding. Otherwise, the contents of the string are implementationdependent.
 * @param display Specifies the connection to the X server.
 */
export function ServerVendor(display: Display) {
  return x11.symbols.XServerVendor(display);
}

/**
 * return a number related to a vendor's release of the X server.
 * @param display Specifies the connection to the X server.
 */
export function VendorRelease(display: Display) {
  return x11.symbols.XVendorRelease(display);
}

export function CreateWindow(
  display: Display,
  parent: XWindow,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  return x11.symbols.XCreateWindow(display, parent, x, y, width, height);
}

export function SelectInput(
  display: Display,
  parent: XWindow,
  // deno-lint-ignore no-explicit-any
  eventMask: any,
) {
  return x11.symbols.XSelectInput(display, parent, eventMask);
}

export function MapWindow(
  display: Display,
  frame: XWindow,
) {
  return x11.symbols.XMapWindow(display, frame);
}
