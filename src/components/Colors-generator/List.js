
import React from 'react'
import { useState,useEffect } from 'react';



const List = ({rgb,weight}) => {

    const [alert,setAlert] = useState(false)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        },2000)

        return ()=>{
            clearTimeout(timeout)
        }
    },[alert])


    function ColorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
      }
      
      function ConvertRGBtoHex(red, green, blue) {
        return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
      }
      const Rgb = rgb.join(',')
   





    const HexValue = ConvertRGBtoHex(...rgb);
   
        const copyText=()=>{
            setAlert(true)

            navigator.clipboard.writeText(HexValue)

        }
 

    // console.log(rgb)

   
    // console.log(RgbToHex)
    return <>
        <div className='color-card' style={{backgroundColor:`rgba(${Rgb})`}} onClick={copyText}>

            {HexValue}
           {alert && <p>copy to clipboard</p>}
        </div>
    </>
}

export default List
