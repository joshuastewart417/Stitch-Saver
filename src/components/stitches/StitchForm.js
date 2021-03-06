import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import Axios from "axios";
import ColorThief from 'colorthief'
import { getAllThreads } from "../threads/ThreadManager"
import { ThreadMatcher } from "../threads/ThreadMatcher";

import "../stitches/StitchForm.css";

export const StitchForm = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [displayImg, setDisplayImg] = useState("");
  const [rgbValues, setRGBValues] = useState([])
  const [dmcValues, setDMCValues] = useState([])
  const [threadsRetrieval, setThreadsRetrieval] = useState(false)


  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "tbesgjkn");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dcxvvavft/image/upload",
      formData
    ).then((res) => setDisplayImg(res.data.url));
    }

  const generatePaletteButton = () => {
    return (
      <>
      <button className="palette_btn" onClick={() => {
        retrievePalette();
      }}>Create Color Palette</button> 
      </>
    )
  }

  const generateThreadButton = () => {
   return (
     <button className="thread_btn" onClick={() => {
       if(rgbValues !== undefined && dmcValues !== undefined) {
         retrieveThreadList()
      }}}>Create Thread List</button>
   )
 }

  const retrievePalette = () => {
    const colorThief = new ColorThief()
    const img = document.querySelector('.preview')
    const colors = colorThief.getPalette(img, 10)
    setRGBValues(colors)
  }

  const retrieveThreadList = () => {
    setThreadsRetrieval(true)
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
    return palette;
            }, palette)}, [rgbValues]);


  useEffect(() => {
    getAllThreads().then(threads => setDMCValues(threads))
   }, [])

  return (

    
      <div className="upload_container">
        <div className="form_wrapper">
          <h3 className="stitchform_header">Create New Stitch</h3>
          <input type="file" id="Upload" onChange={(e) => {setImageSelected(e.target.files[0]);}}/>
          <button className="load_button" onClick={uploadImage}>Load Design</button>
        <img className="preview" src={displayImg} crossOrigin="anonymous" />
          <div className="generate_buttons">
           {displayImg ? generatePaletteButton() : null}
            {(rgbValues.length === 10) ? generateThreadButton() : null}
          </div>
        </div>
        <div className="value_wrapper">
            <div className="palette">
              <div className="swatch">
              </div>
            </div>
              {threadsRetrieval ? <ThreadMatcher rgbValues={rgbValues} dmcValues={dmcValues} displayImg={displayImg} /> : null}
        </div>    
      </div>
  );
};