import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { stitchSave } from '../stitches/StitchManager'

export const ThreadMatcher = ({rgbValues, dmcValues, displayImg}) => {
  const [stitchInput, setStitchInput] = useState("")

  const threads = dmcValues
  const swatches = rgbValues
  const history = useHistory()

 const handleInputChange = (e) => {
     let selectedVal = e.target.value
     setStitchInput(selectedVal)
 }


 const handleClickSaveArticle = () => {
   
  
  
    const newStitch = {
      userId: parseInt(sessionStorage.getItem("stitch_user")),
      title: stitchInput,
      imgUrl: displayImg,
      rgbVal: rgbValues,
      dmcVal: [dmcThreads[0], dmcThreads[3], dmcThreads[6], dmcThreads[9], dmcThreads[12], dmcThreads[15], dmcThreads[18], dmcThreads[21], dmcThreads[24], dmcThreads[27]],
      timestamp: Date.now(),
    };
  
    if (
        newStitch.userId === 0 ||
        newStitch.imgUrl === "" ||
        newStitch.rgbVal === undefined ||
        newStitch.dmcVal === undefined
    ) {
        window.alert("Please complete form before saving");
    } else {
        stitchSave(newStitch)
            .then(() => history.push("/stitchlist"));
    }
  };


    const distanceFromColor = (idx, r, g, b) => {
        let tr = threads[idx].red;
	    let tg = threads[idx].green;
	    let tb = threads[idx].blue;
	
	let baseDistance = ((r - tr) * (r - tr)) + ((g - tg) * (g - tg)) + ((b - tb) * (b - tb));
	let distance = Math.sqrt(baseDistance);
	return distance;
    }



 const matchDMC = () => {

    let distanceList = []
    let threadList = []
    
    for(let s = 0; s < swatches.length; s++){
        for(let w = 0; w < swatches[s].length; w++ ) {
            let rVal = swatches[s][0]
            let gVal = swatches[s][1]
            let bVal = swatches[s][2]

            for (let idx = 0; idx < threads.length; idx++) {
                let candidateDist = distanceFromColor(idx, rVal, gVal, bVal);
                distanceList[idx] = [candidateDist, idx];
            }

            distanceList.sort(function(a, b){return a[0]-b[0]});

            // let dmcI = threads[distanceList[0][1]][0];
            let dmcDesc = threads[distanceList[0][1]].description;
	        let dmcR = threads[distanceList[0][1]].red;
	        let dmcG = threads[distanceList[0][1]].green;
	        let dmcB = threads[distanceList[0][1]].blue;

            let matchedThreads = [dmcDesc, dmcR, dmcG, dmcB]
            threadList.push(matchedThreads)

        }
    }
    return threadList
}          


let dmcThreads = matchDMC()

useEffect(() => {

    const threadSwatch1 = document.querySelector('.list1')
    const threadSwatch2 = document.querySelector('.list2')
    const threadSwatch3 = document.querySelector('.list3')
    const threadSwatch4 = document.querySelector('.list4')
    const threadSwatch5 = document.querySelector('.list5')
    const threadSwatch6 = document.querySelector('.list6')
    const threadSwatch7 = document.querySelector('.list7')
    const threadSwatch8 = document.querySelector('.list8')
    const threadSwatch9 = document.querySelector('.list9')
    const threadSwatch10 = document.querySelector('.list10')
    const hue1 = `rgb(${dmcThreads[0][1]}, ${dmcThreads[0][2]}, ${dmcThreads[0][3]})`
    const hue2 = `rgb(${dmcThreads[3][1]}, ${dmcThreads[3][2]}, ${dmcThreads[3][3]})`
    const hue3 = `rgb(${dmcThreads[6][1]}, ${dmcThreads[6][2]}, ${dmcThreads[6][3]})`
    const hue4 = `rgb(${dmcThreads[9][1]}, ${dmcThreads[9][2]}, ${dmcThreads[9][3]})`
    const hue5 = `rgb(${dmcThreads[12][1]}, ${dmcThreads[12][2]}, ${dmcThreads[12][3]})`
    const hue6 = `rgb(${dmcThreads[15][1]}, ${dmcThreads[15][2]}, ${dmcThreads[15][3]})`
    const hue7 = `rgb(${dmcThreads[18][1]}, ${dmcThreads[18][2]}, ${dmcThreads[18][3]})`
    const hue8 = `rgb(${dmcThreads[21][1]}, ${dmcThreads[21][2]}, ${dmcThreads[21][3]})`
    const hue9 = `rgb(${dmcThreads[24][1]}, ${dmcThreads[24][2]}, ${dmcThreads[24][3]})`
    const hue10 = `rgb(${dmcThreads[27][1]}, ${dmcThreads[27][2]}, ${dmcThreads[27][3]})`
    threadSwatch1.style.setProperty('--hue', hue1)
    threadSwatch2.style.setProperty('--hue', hue2)
    threadSwatch3.style.setProperty('--hue', hue3)
    threadSwatch4.style.setProperty('--hue', hue4)
    threadSwatch5.style.setProperty('--hue', hue5)
    threadSwatch6.style.setProperty('--hue', hue6)
    threadSwatch7.style.setProperty('--hue', hue7)
    threadSwatch8.style.setProperty('--hue', hue8)
    threadSwatch9.style.setProperty('--hue', hue9)
    threadSwatch10.style.setProperty('--hue', hue10)
})


// TODO: FINISH REORDERING SWATCH DMC TO SEPARATE PALETTE STYLING


return (
    <>
        <div className="list_wrapper">
            <div className="swatch_dmc"><div className="list1"></div><div className="list_item">{dmcThreads[0][0]}: rgb({dmcThreads[0][1]}, {dmcThreads[0][2]}, {dmcThreads[0][3]})</div></div>
            <div className="swatch_dmc"><div className="list2"></div><div className="list_item">{dmcThreads[3][0]}: rgb({dmcThreads[3][1]}, {dmcThreads[3][2]}, {dmcThreads[3][3]})</div></div>
            <div className="swatch_dmc"><div className="list3"></div><div className="list_item">{dmcThreads[6][0]}: rgb({dmcThreads[6][1]}, {dmcThreads[6][2]}, {dmcThreads[6][3]})</div></div>
            <div className="swatch_dmc"><div className="list4"></div><div className="list_item">{dmcThreads[9][0]}: rgb({dmcThreads[9][1]}, {dmcThreads[9][2]}, {dmcThreads[9][3]})</div></div>
            <div className="swatch_dmc"><div className="list5"></div> <div className="list_item">{dmcThreads[12][0]}: rgb({dmcThreads[12][1]}, {dmcThreads[12][2]}, {dmcThreads[12][3]})</div></div>
            <div className="list_item"><div className="list6"></div> {dmcThreads[15][0]}: rgb({dmcThreads[15][1]}, {dmcThreads[15][2]}, {dmcThreads[15][3]})</div>
            <div className="list_item"><div className="list7"></div> {dmcThreads[18][0]}: rgb({dmcThreads[18][1]}, {dmcThreads[18][2]}, {dmcThreads[18][3]})</div>
            <div className="list_item"><div className="list8"></div> {dmcThreads[21][0]}: rgb({dmcThreads[21][1]}, {dmcThreads[21][2]}, {dmcThreads[21][3]})</div>
            <div className="list_item"><div className="list9"></div> {dmcThreads[24][0]}: rgb({dmcThreads[24][1]}, {dmcThreads[24][2]}, {dmcThreads[24][3]})</div>
            <div className="list_item"><div className="list10"></div> {dmcThreads[27][0]}: rgb({dmcThreads[27][1]}, {dmcThreads[27][2]}, {dmcThreads[27][3]})</div>      
        </div>
        <div className="submit_wrapper">
            <p>Add Stitch Name</p>
            <input className="stitch_title" type="text" onChange={handleInputChange}/>
            <button className="save_btn" onClick={() => {handleClickSaveArticle()}}>Save Stitch</button>
        </div>
    </>
)
}
