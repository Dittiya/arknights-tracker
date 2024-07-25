import { useEffect, useRef } from "react"

function Canvas({ height = 720, width = 1280 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      const img = new Image(width, height)

      img.src = "showcase.png"

      if (ctx) {
        img.onload = () => { ctx.drawImage(img, 0, 0) }
      }
    }
  })

  return (
    <>
      <h2>Hellow</h2>
      {/* <img src="showcase.png" width={width} height={height} /> */}
      <canvas ref={canvasRef} width={width} height={height}>
        Canvas element
      </canvas>
    </>
  )
}

export default Canvas