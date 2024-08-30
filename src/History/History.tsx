// why 'Module' instead of 'cv'? https://github.com/opencv/opencv/issues/21580
/* eslint-disable @typescript-eslint/no-explicit-any */
// declare let Module: any;

import { useState } from "react"
import Canvas from "./Canvas"
import Uploader from "./Uploader"

function History() {  
  const [imageUrl, setImageUrl] = useState([] as string[])

  return (
    <>
      <h1>Hello world</h1>
      <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <Canvas imageUrl={imageUrl} />
    </>
  )
}

export default History
