import React from 'react'
import { useHistory } from 'react-router-dom'
import { updateStitch } from '../stitches/StitchManager'
import "./StitchCard.css"

export const StitchCard = ({stitch, handleDeleteStitch}) => {
    const history = useHistory()

    return (
        
        <div className="card">
            <div className="card_content">
                <h3>{stitch.title}</h3>
                <img className="card_img" src={stitch.imgUrl} alt="stitch image" />
                <div className="palette">
                    <div className="rgb_values">
                        <p>RGB ({stitch.rgbVal[0][0]}, {stitch.rgbVal[0][1]}, {stitch.rgbVal[0][2]})</p>
                        <p>RGB ({stitch.rgbVal[1][0]}, {stitch.rgbVal[1][1]}, {stitch.rgbVal[1][2]})</p>
                        <p>RGB ({stitch.rgbVal[2][0]}, {stitch.rgbVal[2][1]}, {stitch.rgbVal[2][2]})</p>
                        <p>RGB ({stitch.rgbVal[3][0]}, {stitch.rgbVal[3][1]}, {stitch.rgbVal[3][2]})</p>
                        <p>RGB ({stitch.rgbVal[4][0]}, {stitch.rgbVal[4][1]}, {stitch.rgbVal[4][2]})</p>
                        <p>RGB ({stitch.rgbVal[5][0]}, {stitch.rgbVal[5][1]}, {stitch.rgbVal[5][2]})</p>
                        <p>RGB ({stitch.rgbVal[6][0]}, {stitch.rgbVal[6][1]}, {stitch.rgbVal[6][2]})</p>
                        <p>RGB ({stitch.rgbVal[7][0]}, {stitch.rgbVal[7][1]}, {stitch.rgbVal[7][2]})</p>
                        <p>RGB ({stitch.rgbVal[8][0]}, {stitch.rgbVal[8][1]}, {stitch.rgbVal[8][2]})</p>
                        <p>RGB ({stitch.rgbVal[9][0]}, {stitch.rgbVal[9][1]}, {stitch.rgbVal[9][2]})</p>
                    </div>
                    <div className="dmc_threadvalues">
                        <p>{stitch.dmcVal[0][0]}: RGB ({stitch.dmcVal[0][1]}, {stitch.dmcVal[0][2]}, {stitch.dmcVal[0][3]})</p>
                        <p>{stitch.dmcVal[1][0]}: RGB ({stitch.dmcVal[1][1]}, {stitch.dmcVal[1][2]}, {stitch.dmcVal[1][3]})</p>
                        <p>{stitch.dmcVal[2][0]}: RGB ({stitch.dmcVal[2][1]}, {stitch.dmcVal[2][2]}, {stitch.dmcVal[2][3]})</p>
                        <p>{stitch.dmcVal[3][0]}: RGB ({stitch.dmcVal[3][1]}, {stitch.dmcVal[3][2]}, {stitch.dmcVal[3][3]})</p>
                        <p>{stitch.dmcVal[4][0]}: RGB ({stitch.dmcVal[4][1]}, {stitch.dmcVal[4][2]}, {stitch.dmcVal[4][3]})</p>
                        <p>{stitch.dmcVal[5][0]}: RGB ({stitch.dmcVal[5][1]}, {stitch.dmcVal[5][2]}, {stitch.dmcVal[5][3]})</p>
                        <p>{stitch.dmcVal[6][0]}: RGB ({stitch.dmcVal[6][1]}, {stitch.dmcVal[6][2]}, {stitch.dmcVal[6][3]})</p>
                        <p>{stitch.dmcVal[7][0]}: RGB ({stitch.dmcVal[7][1]}, {stitch.dmcVal[7][2]}, {stitch.dmcVal[7][3]})</p>
                        <p>{stitch.dmcVal[8][0]}: RGB ({stitch.dmcVal[8][1]}, {stitch.dmcVal[8][2]}, {stitch.dmcVal[8][3]})</p>
                        <p>{stitch.dmcVal[9][0]}: RGB ({stitch.dmcVal[9][1]}, {stitch.dmcVal[9][2]}, {stitch.dmcVal[9][3]})</p>
                    </div>
                </div>
            </div>
            <div className="button_wrapper">
                <button className="delete_btn" onClick={() => {
                    handleDeleteStitch(stitch.id)}}>Delete Stitch</button>
                <button className="edit_btn" onClick={() => history.push(`/projects/${stitch.id}/edit`)}>
          Edit Stitch
            </button>    
                    
            </div>
        </div>
        
    )
}