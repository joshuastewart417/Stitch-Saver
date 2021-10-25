export const PaletteCard = (rgbValue) => {
    console.log(rgbValue)
return (`
<div color="rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})" style="--color:'rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})'"></div>
`) 


};