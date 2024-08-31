// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let Module: any;

import { useEffect, useRef, useState } from "react"
import { testCv, getFeature } from "./utils.tsx";

interface Props {
  imageUrl: string[]
  setImageUrl?: React.Dispatch<React.SetStateAction<string[]>>
}

function Canvas({ imageUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [height, setHeight] = useState(0)
  const [width, setwidth] = useState(0)
  const [count, setCount] = useState(0)
  const cv = Module

  useEffect(() => {
    if (imageUrl.length > 0) {
      setHeight(720)
      setwidth(1280)
    }

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      const img = new Image(width, height)

      ctx?.clearRect(0,0, canvas.width, canvas.height)

      img.src = imageUrl[count] || ""

      if (ctx) {
        img.onload = () => { ctx.drawImage(img, 0, 0) }
      }
    }
  }, [count, height, imageUrl, width])

  const iterate = () => {
    for (let i = 0; i < imageUrl.length; i++) {
      setCount(i)
      const src = cv.imread("canvas")
      
      console.log(i)
      console.log(src)
      console.log(getFeature(src))
    }
  }

  return (
    <>
      <h2>Hellow</h2>
      <button onClick={testCv}>Test OpenCV</button>
      <button onClick={iterate}>Iterate Images {count}</button>
      {/* <img src="showcase.png" width={width} height={height} /> */}
      <canvas id="canvas" ref={canvasRef} width={width} height={height}>
        Canvas element
      </canvas>
    </>
  )
}

export default Canvas