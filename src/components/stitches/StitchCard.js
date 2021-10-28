import React from 'react'
import { useHistory } from 'react-router-dom'
import { updateStitch } from '../stitches/StitchManager'

export const StitchCard = ({stitch, handleDeleteStitch}) => {
    const history = useHistory()

    return (
        <div className="card">
            <div className="card_content">
                <h3>{stitch.title}</h3>
                <img src={stitch.imgUrl} alt="stitch image" />
                <div className="palette">
                    <div className="rgb_values">
                        {stitch.rgbVal}
                    </div>
                    <div className="dmc_threadvalues">
                        {stitch.dmcVal}
                    </div>
                </div>
                <button className="delete_btn" onClick={() => {
                    handleDeleteStitch(stitch.id)}}>Delete Stitch</button>
                <button onClick={() => history.push(`/projects/${stitch.id}/edit`)}>
          Edit Stitch
        </button>    
            </div>
        </div>
    )
}