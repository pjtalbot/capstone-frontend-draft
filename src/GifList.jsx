import React, { useSate } from "react"

function GifList(props) {
    const [sources, setSources] = useSate()
    return (
        <div>
            <img src={props.imgUrl}></img>
        </div>
    )
}

export default GifList