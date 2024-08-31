// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
declare let Module: any;

const cv = Module
export function testCv() {
  console.log(cv)
}

export function getFeature(image: unknown) {
  const akaze = new cv.AKAZE()
  const keypoints = new cv.KeyPointVector(),
        descriptors = new cv.Mat()

  setTimeout(() => {
    akaze.detectAndCompute(image, new cv.Mat(), keypoints, descriptors)
  }, 100);

  return {"keypoints": keypoints, "descriptors": descriptors}
}
