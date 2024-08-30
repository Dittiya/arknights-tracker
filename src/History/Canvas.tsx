import { useEffect, useRef, useState } from "react"

interface Props {
  imageUrl: string[]
  setImageUrl?: React.Dispatch<React.SetStateAction<string[]>>
}

function Canvas({ imageUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [height, setHeight] = useState(0)
  const [width, setwidth] = useState(0)

  useEffect(() => {
    if (imageUrl.length > 0) {
      setHeight(720)
      setwidth(1280)
    }

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      const img = new Image(width, height)

      img.src = imageUrl[0] || ""

      if (ctx) {
        img.onload = () => { ctx.drawImage(img, 0, 0) }
      }
    }
  }, [height, imageUrl, width])

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