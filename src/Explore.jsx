import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import Gif  from "./Gif.jsx"
import axios from "axios"

import getTopResults from "./helpers.js"


const Explore = () => {

    let imgSources = []

    const [searchResults, setSearchResults] = useState(imgSources)
    // TODO: instead use useEffect, with second prop. Maybe pass empty array?
    // TODO: Move to helper function
    
    // useEffect( () => {
        
    //     let topResults
    //     let f1 = async () => {
    //         topResults = await getTopResults();
    //     }
    //     f1();

    //     console.log(topResults)
    //     imgSources.push(topResults)
    
    //     // possibly make "GifList" component and have THAT be the child    
    
    //     setSearchResults(topResults)
        
    //  }, [setSearchResults])

    useEffect( (query) => {
        let data

        const fetchData = async (temp) => {
            temp =  await getTopResults(query, imgSources);
        
        }
        data = fetchData(data)
        console.log(data)

        
        
        
        
        // imgSources.push(data)
    
        // possibly make "GifList" component and have THAT be the child    
        setSearchResults(data)
     }, [imgSources])
     console.log(searchResults)
   
        return (
        
        
            <div>
                
                {console.log(searchResults)}
                <ul>
                    
                {searchResults.map((src) => {
                    
                    console.log(src)
                    return(<li>
                        <Gif url={src}/>
                    </li>)
                    
                    
         })}
         
                </ul>
            </div>
        )

     


    }

export default Explore

// ToDo: 
// Sunday
// Submit info on "meetup" to Job curriculum
// Finish/ submit 2-3 of the react "exercises"

// Monday + Tuesday
// Search helper function
// Submit form
//     use backend logic (first attempt to pass variables!)
// Render results (use Gif child component / refactor "Explore")


// Wednesday (or continue/ debug "Search")
// Implement Simple Local storage
//     Favorites
//         img src url, giphy_id

// Next week
// Create Favorites route
    // display all favorites
    // src img / giphy_id from local storage



// 
