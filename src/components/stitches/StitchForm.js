import React, { useState } from "react";
import Axios from "axios";
import ColorThief from '../../../node_modules/colorthief/dist/color-thief'
import "../stitches/StitchForm.css"

export const StitchForm = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [displayImg, setDisplayImg] = useState("");
  const [rgbValue, setRGBValue] = useState([])
  const colorThief = new ColorThief()
  const image = document.querySelector('.preview')
  const palette = document.querySelector('.palette')
  
  const swatches = 10;

  
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "tbesgjkn");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dcxvvavft/image/upload",
      formData
    ).then((res) => setDisplayImg(res.data.url));

    }

  return (
    <div className="upload_container">
      <div className="form_wrapper">
        <input
          type="file"
          onChange={(e) => {
            setImageSelected(e.target.files[0]);
          }}
        />
        <button onClick={() => uploadImage()}>Upload Image</button>
      </div>
      <img className="preview" src={displayImg} crossOrigin="anonymous"
      onLoad={() => {

          const colors = colorThief.getPalette(image, swatches);
          while (palette.firstChild) 
          palette.removeChild(palette.firstChild);
          colors.reduce((palette, rgb) => {
              const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
              const swatch = document.createElement('div')
              swatch.style.setProperty('--color', color);
              swatch.setAttribute('color', color)
              palette.appendChild(swatch)
              return palette;
            }, palette)

  }}></img>
      <div className="palette">
         <div className="swatch"></div>
      </div>
    </div>
  );
};
