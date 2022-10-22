import React from 'react'

export default function FormUploadImage() {
  function uploadToClient(){

  }

  function uploadToServer(){

  }
  return (
    <div>
      <h1>Upload Home Photos</h1>
      <div>
        <input type="file" name="myImage" onChange={uploadToClient} />
      </div>
    </div>

  )
}
