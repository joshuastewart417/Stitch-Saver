import React, {useEffect, useState} from 'react'
import { useHistory, useParams} from 'react-router-dom'
import { updateStitch } from '../stitches/StitchManager'
import { getStitchById } from '../stitches/StitchManager'

import "./StitchForm.css"


export const StitchEditForm = () => {
    const currentUserId = parseInt(sessionStorage.getItem("stitch_user"))
    const [stitch, setStitch] = useState({ title: "", imgUrl: "", rgbVal: [], dmcVal: []})
    const [isLoading, setIsLoading] = useState(false);
    const {stitchId} = useParams();

    const history = useHistory();

    const handleFieldChange = (e) => {
        const stateToChange = {...stitch}
        stateToChange[e.target.id] = e.target.value
        setStitch(stateToChange)
    }

    const updateExistingStitch = (e) => {
        e.preventDefault()
        setIsLoading(true);

        const editedStitch = {
            id: stitchId,
            userId: currentUserId,
            imgUrl: stitch.imgUrl,
            title: stitch.title,
            rgbVal: stitch.rgbVal,
            dmcVal: stitch.dmcVal,
            timestamp: Date.now()

        };

        updateStitch(editedStitch).then(() => {
            history.push("/stitchlist")
        })
    }

  useEffect(() => {
    getStitchById(stitchId)
        .then((stitch) => {
        setStitch(stitch);
        setIsLoading(false);
    });
  }, []);  

   
 return (
     
        <div className="card">
            <div className="card_content"> 
                <input type="text" id="title" onChange={handleFieldChange} value={stitch.title}/>
                <img className="card_img" src={stitch.imgUrl} alt="stitch image" />
                <div className="values_container">
                    <div className="rgb_values">
                        <p className="rgb_title">RGB Values</p>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[0]?.[0]}, ${stitch.rgbVal?.[0]?.[1]}, ${stitch.rgbVal?.[0]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[0]?.[0]}, {stitch.rgbVal?.[0]?.[1]}, {stitch.rgbVal?.[0]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[1]?.[0]}, ${stitch.rgbVal?.[1]?.[1]}, ${stitch.rgbVal?.[1]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[1]?.[0]}, {stitch.rgbVal?.[1]?.[1]}, {stitch.rgbVal?.[1]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[2]?.[0]}, ${stitch.rgbVal?.[2]?.[1]}, ${stitch.rgbVal?.[2]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[2]?.[0]}, {stitch.rgbVal?.[2]?.[1]}, {stitch.rgbVal?.[2]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[3]?.[0]}, ${stitch.rgbVal?.[3]?.[1]}, ${stitch.rgbVal?.[3]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[3]?.[0]}, {stitch.rgbVal?.[3]?.[1]}, {stitch.rgbVal?.[3]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[4]?.[0]}, ${stitch.rgbVal?.[4]?.[1]}, ${stitch.rgbVal?.[4]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[4]?.[0]}, {stitch.rgbVal?.[4]?.[1]}, {stitch.rgbVal?.[4]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[5]?.[0]}, ${stitch.rgbVal?.[5]?.[1]}, ${stitch.rgbVal?.[5]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[5]?.[0]}, {stitch.rgbVal?.[5]?.[1]}, {stitch.rgbVal?.[5]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[6]?.[0]}, ${stitch.rgbVal?.[6]?.[1]}, ${stitch.rgbVal?.[6]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[6]?.[0]}, {stitch.rgbVal?.[6]?.[1]}, {stitch.rgbVal?.[6]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[7]?.[0]}, ${stitch.rgbVal?.[7]?.[1]}, ${stitch.rgbVal?.[7]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[7]?.[0]}, {stitch.rgbVal?.[7]?.[1]}, {stitch.rgbVal?.[7]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[8]?.[0]}, ${stitch.rgbVal?.[8]?.[1]}, ${stitch.rgbVal?.[8]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[8]?.[0]}, {stitch.rgbVal?.[8]?.[1]}, {stitch.rgbVal?.[8]?.[2]})</div>
                        <div className="rgb-list" style={{backgroundColor: `rgb(${stitch.rgbVal?.[9]?.[0]}, ${stitch.rgbVal?.[9]?.[1]}, ${stitch.rgbVal?.[9]?.[2]})`}}>
                            RGB ({stitch.rgbVal?.[9]?.[0]}, {stitch.rgbVal?.[9]?.[1]}, {stitch.rgbVal?.[9]?.[2]})</div>
                    </div>
                    <div className="dmc_threadvalues">
                        <p className="dmc_title">Matching Threads</p>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[0]?.[1]}, ${stitch.dmcVal?.[0]?.[2]}, ${stitch.dmcVal?.[0]?.[3]})`}}>
                            {stitch.dmcVal?.[0]?.[0]}: RGB ({stitch.dmcVal?.[0]?.[1]}, {stitch.dmcVal?.[0]?.[2]}, {stitch.dmcVal?.[0]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[1]?.[1]}, ${stitch.dmcVal?.[1]?.[2]}, ${stitch.dmcVal?.[1]?.[3]})`}}>
                            {stitch.dmcVal?.[1]?.[0]}: RGB ({stitch.dmcVal?.[1]?.[1]}, {stitch.dmcVal?.[1]?.[2]}, {stitch.dmcVal?.[1]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[2]?.[1]}, ${stitch.dmcVal?.[2]?.[2]}, ${stitch.dmcVal?.[2]?.[3]})`}}>
                            {stitch.dmcVal?.[2]?.[0]}: RGB ({stitch.dmcVal?.[2]?.[1]}, {stitch.dmcVal?.[2]?.[2]}, {stitch.dmcVal?.[2]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[3]?.[1]}, ${stitch.dmcVal?.[3]?.[2]}, ${stitch.dmcVal?.[3]?.[3]})`}}>
                            {stitch.dmcVal?.[3]?.[0]}: RGB ({stitch.dmcVal?.[3]?.[1]}, {stitch.dmcVal?.[3]?.[2]}, {stitch.dmcVal?.[3]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[4]?.[1]}, ${stitch.dmcVal?.[4]?.[2]}, ${stitch.dmcVal?.[4]?.[3]})`}}>
                            {stitch.dmcVal?.[4]?.[0]}: RGB ({stitch.dmcVal?.[4]?.[1]}, {stitch.dmcVal?.[4]?.[2]}, {stitch.dmcVal?.[4]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[5]?.[1]}, ${stitch.dmcVal?.[5]?.[2]}, ${stitch.dmcVal?.[5]?.[3]})`}}>
                            {stitch.dmcVal?.[5]?.[0]}: RGB ({stitch.dmcVal?.[5]?.[1]}, {stitch.dmcVal?.[5]?.[2]}, {stitch.dmcVal?.[5]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[6]?.[1]}, ${stitch.dmcVal?.[6]?.[2]}, ${stitch.dmcVal?.[6]?.[3]})`}}>
                            {stitch.dmcVal?.[6]?.[0]}: RGB ({stitch.dmcVal?.[6]?.[1]}, {stitch.dmcVal?.[6]?.[2]}, {stitch.dmcVal?.[6]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[7]?.[1]}, ${stitch.dmcVal?.[7]?.[2]}, ${stitch.dmcVal?.[7]?.[3]})`}}>
                            {stitch.dmcVal?.[7]?.[0]}: RGB ({stitch.dmcVal?.[7]?.[1]}, {stitch.dmcVal?.[7]?.[2]}, {stitch.dmcVal?.[7]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[8]?.[1]}, ${stitch.dmcVal?.[8]?.[2]}, ${stitch.dmcVal?.[8]?.[3]})`}}>
                            {stitch.dmcVal?.[8]?.[0]}: RGB ({stitch.dmcVal?.[8]?.[1]}, {stitch.dmcVal?.[8]?.[2]}, {stitch.dmcVal?.[8]?.[3]})</div>
                        <div className="dmc-list" style={{backgroundColor: `rgb(${stitch.dmcVal?.[9]?.[1]}, ${stitch.dmcVal?.[9]?.[2]}, ${stitch.dmcVal?.[9]?.[3]})`}}>
                            {stitch.dmcVal?.[9]?.[0]}: RGB ({stitch.dmcVal?.[9]?.[1]}, {stitch.dmcVal?.[9]?.[2]}, {stitch.dmcVal?.[9]?.[3]})</div>
                    </div>
                </div>
              
            <button type="button" disabled={isLoading} className="update_btn" onClick={updateExistingStitch}>Update Stitch</button>
        </div>
    </div>
 ) 

};