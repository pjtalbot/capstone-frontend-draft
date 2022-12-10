import React, { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (query) => {
    const [data, setData] = useState(null);

    let key = 'fW0yRyklR4H8mUX5pf1YF8EXsbeBpFc6&q'
    


    useEffect(() => {
        if(query) {
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}=%40signwithrobert&limit=5&offset=0&rating=g&lang=en`)
            .then(res => {
                console.log(res.data)
                setData(res.data)

            })
            
        }
        
    }, [query])

    return {
        data,
    }
}

export default useFetch;