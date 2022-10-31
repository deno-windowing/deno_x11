export const x11 = Deno.dlopen("libX11.so", {
  XAllPlanes: {
    parameters: [],
    result: "u64",
  },
  XBlackPixel: {
    parameters: ["pointer", "i32"],
    result: "u64",
  },
  XWhitePixel: {
    parameters: ["pointer", "i32"],
    result: "u64",
  },
  XConnectionNumber: {
    parameters: ["pointer"],
    result: "i32",
  },
  XDefaultColormap: {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  XDefaultDepth: {
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  XListDepths: {
    parameters: ["pointer", "i32", "i32"],
    result: "i32",
  },
  XDefaultGC: {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  XDefaultRootWindow: {
    parameters: ["pointer"],
    result: "pointer",
  },
  XDefaultScreenOfDisplay: {
    parameters: ["pointer"],
    result: "pointer",
  },
  XScreenOfDisplay: {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  XDefaultScreen: {
    parameters: ["pointer"],
    result: "i32",
  },
  XDefaultVisual: {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  XDisplayCells: {
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  XDisplayPlanes: {
    parameters: ["pointer", "i32"],
    result: "i32",
  },
  XDisplayString: {
    parameters: ["pointer"],
    result: "u32",
  },
  XExtendedMaxRequestSize: {
    parameters: ["pointer"],
    result: "u64",
  },
  XMaxRequestSize: {
    parameters: ["pointer"],
    result: "u64",
  },
  XLastKnownRequestProcessed: {
    parameters: ["pointer"],
    result: "u64",
  },
  XNextRequest: {
    parameters: ["pointer"],
    result: "u64",
  },
  XProtocolVersion: {
    parameters: ["pointer"],
    result: "i32",
  },
  XProtocolRevision: {
    parameters: ["pointer"],
    result: "i32",
  },
  XQLength: {
    parameters: ["pointer"],
    result: "i32",
  },
  XRootWindow: {
    parameters: ["pointer", "i32"],
    result: "pointer",
  },
  XScreenCount: {
    parameters: ["pointer"],
    result: "i32",
  },
  XServerVendor: {
    parameters: ["pointer"],
    result: "u64",
  },
  XVendorRelease: {
    parameters: ["pointer"],
    result: "i32",
  },
  XOpenDisplay: {
    parameters: ["buffer"],
    result: "pointer",
  },
  XCreateWindow: {
    parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32"],
    result: "pointer",
  },
  XSelectInput: {
    parameters: ["pointer", "pointer", "pointer"],
    result: "pointer",
  },
  XMapWindow: {
    parameters: ["pointer", "pointer"],
    result: "pointer",
  },
});
