export const ThreadMatcher = ({rgbValues, dmcValues}) => {

const threads = dmcValues
const swatches = rgbValues


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

            let matchedThreads = {dmcDesc, dmcR, dmcG, dmcB}

            threadList.push(matchedThreads)

        }
    }
    return threadList
}          


let dmcThreads = matchDMC()
console.log(dmcThreads[0])


return (
    <>
        <ul className="list_wrapper">
            <li className="list_item">{dmcThreads[0].dmcDesc}: rgb({dmcThreads[0].dmcR}, {dmcThreads[0].dmcG}, {dmcThreads[0].dmcB})</li>
            <li className="list_item">{dmcThreads[3].dmcDesc}: rgb({dmcThreads[3].dmcR}, {dmcThreads[3].dmcG}, {dmcThreads[3].dmcB})</li>
            <li className="list_item">{dmcThreads[6].dmcDesc}: rgb({dmcThreads[6].dmcR}, {dmcThreads[6].dmcG}, {dmcThreads[6].dmcB})</li>
            <li className="list_item">{dmcThreads[9].dmcDesc}: rgb({dmcThreads[9].dmcR}, {dmcThreads[9].dmcG}, {dmcThreads[9].dmcB})</li>
            <li className="list_item">{dmcThreads[12].dmcDesc}: rgb({dmcThreads[12].dmcR}, {dmcThreads[12].dmcG}, {dmcThreads[12].dmcB})</li>
            <li className="list_item">{dmcThreads[15].dmcDesc}: rgb({dmcThreads[15].dmcR}, {dmcThreads[15].dmcG}, {dmcThreads[15].dmcB})</li>
            <li className="list_item">{dmcThreads[18].dmcDesc}: rgb({dmcThreads[18].dmcR}, {dmcThreads[18].dmcG}, {dmcThreads[18].dmcB})</li>
            <li className="list_item">{dmcThreads[21].dmcDesc}: rgb({dmcThreads[21].dmcR}, {dmcThreads[21].dmcG}, {dmcThreads[21].dmcB})</li>
            <li className="list_item">{dmcThreads[24].dmcDesc}: rgb({dmcThreads[24].dmcR}, {dmcThreads[24].dmcG}, {dmcThreads[24].dmcB})</li>
            <li className="list_item">{dmcThreads[27].dmcDesc}: rgb({dmcThreads[27].dmcR}, {dmcThreads[27].dmcG}, {dmcThreads[27].dmcB})</li>      
        </ul>
    </>
)
}
