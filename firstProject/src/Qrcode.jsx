import React, { useState } from 'react'

const Qrcode = () => {
  const [img,setImg] = useState('')
  const [loading, setLoading] = useState(false)
  const [qrdata,setQrdata] = useState("")  
  
  const [qrsize,setQrsize] = useState("150")
  
  function generateQr(){
    setLoading(true);
    // In qrdata for entering url you can use ${encodeURIComponent(qrdata)}
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${qrdata}`;
      setImg(url)
    }catch(error){
      console.error("Error in generating QR code", error)
    }finally{
      setLoading(false)
    }
  }
  function downloadQr(){
    fetch(img)
      .then((response)=>response.blob())
      .then((blob)=>{
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob)
        link.download = "qrcode.png"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
      })
      .catch((error)=>{
        console.error("Error in downloading Qr code",error)
      })
      ;

  }
  return (
    <div className='app-container'>
        <h1> QR CODE GENERATOR</h1>
        {loading && <p>Please wait ...</p>}
{/* conditional rendering of image */}
        { img &&<img src={img} className='Qrcode-img' width="500" height="400" /> }  
        <div>
            <label htmlFor='dataInput' className='input-label'> Data for Qrcode:
            </label>
            <input type='text' value={qrdata} id='dataInput' placeholder='Enter data for Qrcode' onChange={(e)=>setQrdata(e.target.value)}/>
            <label htmlFor='sizeInput' className='input-label' > Image size:
            </label>
            <input type='text' value={qrsize} id='sizeInput' placeholder='Enter image size' onChange={(e)=>setQrsize(e.target.value)} />  
            <button className='gen-button' disabled={loading} onClick={generateQr}>
                Generate Qr code</button>
            <button className='download-button' onClick={()=>downloadQr("jp")}>Download Qr code</button>
        </div>

    </div>
  )
}

export default Qrcode