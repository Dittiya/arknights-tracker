import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  imageUrl: string[]
  setImageUrl: React.Dispatch<React.SetStateAction<string[]>>
}

function Uploader({ imageUrl, setImageUrl }: Props) {
  const [images, setImages] = useState([] as Blob[])

  useEffect(() => {
    if (images.length < 1)
      return

    const newImageUrl: Array<string> = []

    images.forEach((image: Blob) => newImageUrl.push(URL.createObjectURL(image)))
    setImageUrl(newImageUrl)

  }, [images, setImageUrl])

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    setImages([...files])
  }

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onChange} />
      <div id="preview">
        {imageUrl.map((source) => (
          <img key={source} src={source} alt="Not Found" width={"250px"}></img>
        ))}
      </div>
    </>
  )
}

export default Uploader