import React from "react"
import axios from "axios"

const getTopResults = async (query, destinationArray) => {
    // Todo: hardcoded api key, NO GOOD! Fix that later
    
    let key = 'fW0yRyklR4H8mUX5pf1YF8EXsbeBpFc6&q'
    
    if (!query) {
        console.log('No Query')
        let topResults = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}=%40signwithrobert&limit=5&offset=0&rating=g&lang=en`)
        console.log(topResults)
        topResults.data.data.forEach(async (gif) => {
         let eachResult = await gif.images.fixed_height_small.url
        console.log(eachResult)
        console.log(destinationArray)
        destinationArray.push(eachResult)


    })

    } else {
        console.log(`query is ${query}`)
        let topResults = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}=%40signwithrobert+${query}&limit=3&offset=0&rating=g&lang=en`)

        console.log(topResults)
        topResults.data.data.forEach((gif) => {
        let result = gif.images.fixed_height_small.url
        
        console.log(result)
        return result
        
        
    })
        

    }
    // return resultArray
    

    // possibly make "GifList" component and have THAT be the child    
}

export default getTopResults