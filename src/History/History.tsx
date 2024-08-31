// why 'Module' instead of 'cv'? refer to https://github.com/opencv/opencv/issues/21580
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let Module: any;

import { useState } from "react"
import Canvas from "./Canvas"
import Uploader from "./Uploader"

function History() {
  const [imageUrl, setImageUrl] = useState([] as string[])
  const cv = Module

  /* OpenCV WASM runtime refer to the following link
   * https://stackoverflow.com/questions/56671436/cv-mat-is-not-a-constructor-opencv 
  */
  cv.onRuntimeInitialized = () => {
    console.log("test")
    console.log(cv.ACCESS_FAST)
  }

  return (
    <>
      <h1>Hello world</h1>
      <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <Canvas imageUrl={imageUrl} />
    </>
  )
}

export default History
