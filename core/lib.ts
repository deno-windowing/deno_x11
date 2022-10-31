export const x11 = Deno.dlopen("libX11.so", {
  XAllPlanes: {
    parameters: [],
    result: "u64"
  },
  XBlackPixel: {
    parameters: ["pointer", "i32"],
    result: "u64"
  },
  XWhitePixel: {
    parameters: ["pointer", "i32"],
    result: "u64"
  },
  XConnectionNumber: {
    parameters: ["pointer"],
    result: "i32"
  },
  XDefaultColormap: {
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  XDefaultDepth: {
    parameters: ["pointer", "i32"],
    result: "i32"
  },
  XListDepths: {
    parameters: ["pointer", "i32", "i32"],
    result: "i32"
  },
  XDefaultGC: {
    parameters: ["pointer", "i32"],
    result: "pointer"
  },
  XDefaultRootWindow: {
    parameters: ["pointer"],
    result: "pointer"
  },
  XDefaultScreenOfDisplay: {
    parameters: ["pointer"],
    result: "pointer"
  },
  XScreenOfDisplay: {
    parameters: ["pointer", "i32"],
    result: "pointer"
  },

  
  XOpenDisplay: {
    parameters: ["buffer"],
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
});
