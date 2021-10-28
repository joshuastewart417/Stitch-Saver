import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getStitches,  deleteStitch } from '../stitches/StitchManager'
import {StitchCard} from '../stitches/StitchCard'


export const StitchList = () => {
    const [stitches, setStitches] = useState([])
    const history = useHistory()


    const retrieveStitches = () => {
        return getStitches().then(stitchProjList => {
            setStitches(stitchProjList)
        })
    }

    const handleDeleteStitch = (id) => {
        deleteStitch(id)
        .then(() => getStitches().then(setStitches)) 
    }

useEffect(() => {
 retrieveStitches()
}, [])

return (
    <div>
        {stitches.map((stitch) => <StitchCard key={stitch.id} stitch={stitch} handleDeleteStitch={handleDeleteStitch}/>)}
    </div>
)
}