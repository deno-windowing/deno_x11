import { xlib } from "./symbols.ts";

export const x11 = Deno.dlopen("libX11.so", xlib).symbols;

export const False = 0;
export const True = 1;
export const InputOutput = 1;
export const InputOnly = 2;
export  const CWBackPixmap = 0x0001;
export  const CWBackPixel = 0x0002;
export  const CWBorderPixmap = 0x0004;
export  const CWBorderPixel = 0x0008;
export  const CWBitGravity = 0x0010;
export  const CWWinGravity = 0x0020;
export  const CWBackingStore = 0x0040;
export  const CWBackingPlanes = 0x0080;
export  const CWBackingPixel = 0x0100;
export  const CWOverrideRedirect = 0x0200;
export  const CWSaveUnder = 0x0400;
export  const CWEventMask = 0x0800;
export  const CWDontPropagate = 0x1000;
export  const CWColormap = 0x2000;
export  const CWCursor = 0x4000;

export interface Attributes {
  /** u64 */
  backgroundPixel: Deno.PointerValue;
}
export const sizeOfAttributes = 8;

export function allocateAttributes(data?: Partial<Attributes>) {
  const buf = new Uint8Array(sizeOfAttributes);
  const view = new DataView(buf.buffer);
  // 0x00: u64
  if (data?.backgroundPixel !== undefined) view.setBigUint64(0, BigInt(data.backgroundPixel), true);
  return buf;
}


