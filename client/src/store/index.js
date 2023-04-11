import { proxy } from "valtio"

//Similar to React Context, but simpler
// initial state
const state = proxy({
  intro: true,
  color: "#efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png"
})

export default state
