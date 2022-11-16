import { useState } from "react";
export default function image() {
    const [imgsSrc, setImgsSrc] = useState([]);
    const onChange = (e) => {
        for (const file of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc((imgs) => [...imgs, reader.result]);
            };
            reader.onerror = () => {
                console.log(reader.error);
            };
        }
    };
    return (
        <div>
            <input onChange={onChange} type="file" name="file" multiple />
            {imgsSrc.map((link) => (
                <img src={link} />
            ))}
        </div>
    );
}