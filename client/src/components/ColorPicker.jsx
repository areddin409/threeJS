import React from "react"
import { SketchPicker } from "react-color"
import { useSnapshot } from "valtio"

import state from "../store"

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000111", //black
          "#ffffff", //white
          "#ff0000", //red
          "#ccc", //grey
          "#efbd4e", //yellow
          "#f7a8b8", //pink
          "#80c670", //green
          "#726de8", //purple
          "#2ccce4", //teal
          "#ff96ad", //pink
          "#ff6a6a", //red
          "#ffcc5c", //yellow
          "#c2e812", //green
          "#12e8e0" //teal
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  )
}

export default ColorPicker
