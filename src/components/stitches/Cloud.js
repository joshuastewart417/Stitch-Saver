import React, { useEffect, useState } from "react";
import Axios from "axios";
import ColorThief from '../node_modules/colorthief/dist/color-thief'
import "../src/Stitchform.css";

export const Cloud = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [displayImg, setDisplayImg] = useState("");
  const [rgbValues, setRGBValues] = useState([])

  
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "tbesgjkn");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dcxvvavft/image/upload",
      formData
    ).then((res) => setDisplayImg(res.data.url));
    }

  const generateButtons = () => {
    return (
      <>
      <button className="palette_btn" onClick={() => {
      }}>Create Color Palette</button>
      <button className="thread_btn">Create Thread List</button>
      </>
    )
  }

  const handleImageLoaded = () => {
    const colorThief = new ColorThief()
    const img = document.querySelector('.preview')
    const colors = colorThief.getPalette(img, 10)
    setRGBValues(colors)
  }

  useEffect(() => {
    const palette = document.querySelector('.palette')
    while (palette.firstChild) {
    palette.removeChild(palette.firstChild)}
    rgbValues.reduce((palette, rgb) => {
    const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    const swatch = document.createElement('div')
    swatch.style.setProperty('--color', color);
    swatch.setAttribute('color', color)
    palette.appendChild(swatch)
    console.log(swatch)
    return palette;
            }, palette)}, [rgbValues]);


  return (
    <div className="upload_container">
      <div className="form_wrapper">
        <input type="file" onChange={(e) => {setImageSelected(e.target.files[0]);}}/>
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <img className="preview" src={displayImg} crossOrigin="anonymous" onLoad={() => {
        handleImageLoaded()
      }}/>
      <div className="palette">
        <div className="swatch">

        </div>
      </div>
      {displayImg ? generateButtons() : null}
    </div>
  );
};
