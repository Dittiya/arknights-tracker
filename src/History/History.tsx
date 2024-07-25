// why 'Module' instead of 'cv'? https://github.com/opencv/opencv/issues/21580
/* eslint-disable @typescript-eslint/no-explicit-any */
declare let Module: any;

function History() {  
  const cv = Module

  console.log(cv.RETR_LIST)

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default History
