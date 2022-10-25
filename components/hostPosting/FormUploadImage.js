import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"

export default function FormUploadImage({ formData, setFormData }) {
  const [attachment, setAttachment] = useState()
  const [file, setFile] = useState("")
  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, "images/")
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const { currentTarget: { result } } = finishedEvent
      setAttachment(result);
    }
    reader.readAsDataURL(theFile)
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, [])
  const onClearAttachment = () => setAttachment(null)
  const onUpload = () => {
    const imageRef = ref(storage, `images/${file.name + uuidv4()}`)
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFormData({ ...formData, image: url })
      })
    })
  }
  return (
    <div>
      <h1>Upload Home Photos</h1>
      <div>
        <input type="file" name="myImage" onChange={onFileChange} />
        <div>
          <img src={attachment} />
          <button onClick={onUpload}>File upload</button>
          <button onClick={onClearAttachment}>Clear</button>
        </div>
        <div>
          {/* {imageList.map((url) => {
            return <img src={url} />
          })} */}
        </div>
      </div>
    </div>
  )
}