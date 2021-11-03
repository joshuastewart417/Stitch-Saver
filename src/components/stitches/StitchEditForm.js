import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { updateStitch } from '../stitches/StitchManager'
import { getStitchById } from '../stitches/StitchManager'

import "./StitchForm.css"


export const StitchEditForm = () => {
    const currentUserId = parseInt(sessionStorage.getItem("stitch_user"))
    const [stitch, setStitch] = useState({ title: "", imgUrl: "", rgbVal: [], dmcVal: []
    })
    const [inputChange, setInputChange] = useState("")

    const history = useHistory()
    const {stitchId} = useParams()

    const handleFieldChange = (e) => {
        let selectedChange = e.target.value
        setInputChange(selectedChange)
    }

    const updateExistingStitch = () => {
        

        const editedStitch = {
            id: stitchId,
            userId: currentUserId,
            imgUrl: stitch.imgUrl,
            title: inputChange,
            rgbVal: stitch.rgbVal,
            dmcVal: stitch.dmcVal,
            timestamp: Date.now()

        }

        updateStitch(editedStitch).then(stitchObj => setStitch(stitchObj))
    }

  useEffect(() => {
    getStitchById(stitchId).then(stitchIdObj => {
        setStitch(stitchIdObj);
    })
  }, [])  


 return (
    <div className="card">
    <div className="card_content">
        <input type="text" onChange={handleFieldChange}/>
        <img className="preview" src={stitch.imgUrl} alt="stitch image" />
        <div className="palette_edit">
            <div className="rgb_values_edit">
                {stitch.rgbVal}
            </div>
            <div className="dmc_threadvalues_edit">
                {stitch.dmcVal}
            </div>
        </div>
        <button className="update_btn" onClick={() => {
            updateExistingStitch()
            history.push("/stitchlist")
        }}>Update Stitch</button>
    </div>
</div>
 )

}