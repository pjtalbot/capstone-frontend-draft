import React, { useState } from "react"

// probably better to send the whole gif data, then can use name for "alt" or easily add other methods

function Gif(url) {
    console.log(url.url)
    return (
        
        <div>
            <img src={url.url} alt='' />
        </div>
    )
}

export default Gif