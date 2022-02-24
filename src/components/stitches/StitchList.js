import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getStitches,  deleteStitch, getStitchByUser } from '../stitches/StitchManager'
import {StitchCard} from '../stitches/StitchCard'

import "./StitchForm.css"


export const StitchList = () => {
    const [stitches, setStitches] = useState([])
    const [userStitches, setUserStitches] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()


    const retrieveStitches = () => {
        return getStitches().then(stitchProjList => {
            setStitches(stitchProjList)
        })
    }

    const retrieveUserStitches = () => {
        const userId = parseInt(sessionStorage.getItem('stitch_user'))
        return getStitchByUser("stitches", userId, ["user"]).then(userStitch => {
            setUserStitches(userStitch)
            setIsLoaded(true)
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
    <div className="cards_list">
        {stitches.map(stitch => <StitchCard key={stitch.id} stitch={stitch} handleDeleteStitch={handleDeleteStitch}/>)}
    </div>
)

}