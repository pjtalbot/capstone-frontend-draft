import React, { useState, useEffect, useCallback, useMemo } from "react"
import { Link, NavLink } from "react-router-dom"
import Gif  from "./Gif.jsx"
import axios from "axios"
import getTopResults from "./helpers.js"
import useFetch from "./useFetch.js"


const Search = () => {



    const [query, setQuery] = useState('')
    
    const search = (term) => {
        setQuery(term)
    }

    // const myQuery = useMemo(() => ({query}, [query]))

    const [imgSources, setImgSources] = useState([])

    

    

    const [searchResults, setSearchResults] = useState([])
    // TODO: instead use useEffect, with second prop. Maybe pass empty array?
    // TODO: Move to helper function

    const INITIAL_STATE = {
        query: '',
        limit: 10
    }



    const [formData, setFormData] = useState(INITIAL_STATE)
    console.log(formData)



    const handleChange = e => {
        const {name, value} = e.target

        setFormData(formData => {
            console.log(value)
            return (
                {
                ...formData,
                [name]: value
            })
        })
    }

     const handleSubmit =  (e) => {
        e.preventDefault()
        console.log("handling submit")

        const { query, value }= e.target

        
        
        console.log(formData)
        search(formData.search)

        // getTopResults(formData.name, imgSources)
        console.log('SEARCH RESULTS')
        console.log(searchResults)
        console.log('ImgSources ARRAY')
        console.log(imgSources)
        setFormData(INITIAL_STATE)
        
        
        


    }
    useEffect(() => {
        let sourcesArr = []
        if(!query) {
            console.log('In EFFECT')
            async function getTopResults() {
                let key = 'fW0yRyklR4H8mUX5pf1YF8EXsbeBpFc6&q'
                console.log('No Query')
                const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}=%40signwithrobert&limit=5&offset=0&rating=g&lang=en`)
                console.log(res.data)
                setSearchResults(res.data)
                // console.log(res.data.data)
                console.log(searchResults)
                console.log(searchResults.data)
                res.data.data.forEach(searchResult => {
                    sourcesArr.push(searchResult.images.downsized.url)
                })
                console.log(`IMAGE SOURCES ARRAY IN EFFECT`)
                console.log(imgSources)
                setImgSources(sourcesArr)
            }
            getTopResults()
            

        } else {
            async function getSearchResults(q) {
                
                console.log(`QUERY: ${query}`)
                let key = 'fW0yRyklR4H8mUX5pf1YF8EXsbeBpFc6&q'
                const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}=%40signwithrobert+${query}&limit=3&offset=0&rating=g&lang=en`)
                console.log(res.data)
                setSearchResults(res.data)
                // console.log(res.data.data)
                console.log(searchResults)
                console.log(searchResults.data)
                res.data.data.forEach(searchResult => {
                    sourcesArr.push(searchResult.images.downsized.url)
                })
                console.log(`IMAGE SOURCES ARRAY IN EFFECT`)
                console.log(imgSources)
                setImgSources(sourcesArr)
            }
            getSearchResults(query)
        }
        

    },[query])

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input id ="search" type="text" name="search" placeholder="Search"
            value={formData.name} onChange={handleChange}/>
            <button>Go!</button>
        </form>
        
            {console.log(searchResults.data)}
            {}
            <ul>
                
            { imgSources.length > 0 &&
            imgSources.map((src) => {
                console.log(src)
                
                
                return (<li>
                    <div>
                    
                    <Gif url={src}/>

                    </div>
                    
                </li>)
                
                
     })}
            </ul>
        </div>
    )
    }

export default Search

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

// let imgSources = []

//     const [searchResults, setSearchResults] = useState([])
//     // TODO: instead use useEffect, with second prop. Maybe pass empty array?
//     // TODO: Move to helper function
    
//     useEffect(async () => {
        
//         let topResults = await getTopResults();
//         console.log(topResults)
//         imgSources.push(topResults)
    
//         // possibly make "GifList" component and have THAT be the child    
    
//         setSearchResults(topResults)
        
//      }, [setSearchResults])

//     return (
        
        
//         <div>
            
//             {console.log(searchResults)}
//             <ul>
                
//             {searchResults.map((src) => {
                
//                 console.log(src)
//                 return(<li>
//                     <Gif url={src}/>
//                 </li>)
                
                
//      })}
//             </ul>
//         </div>
//     )
    

    // const INITIAL_STATE = {
    //     query: '',
    //     limit: 10
    // }

    // const [formData, setFormData] = useState(INITIAL_STATE)
    // const handleChange = (e) => {
    //     const { query, value }= e.target
    //     setFormData(formData => ({
    //         ...formData,
    //     [query]: value

    //     }))
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     (console.log("handling submit"))

    //     const { query, value }= e.target
    //     setFormData(formData => {
    //         console.log(query)
    //         return (
    //             {
    //             ...formData,
    //             [query]: value
    //         })
    //     })

    //     let searchResults = getTopResults(formData)
    //     console.log(searchResults)


    // }
    
    // useEffect(() => {
    //     getTopResults()
        
    //  }, [setSearchResults])

    // return (
        
    //     <form>
    //         <label htmlFor="search">Search</label>
    //         <input id ="search" type="text" name="search" placeholder="Search"
    //         value={formData.name}
    //         onSubmit={handleSubmit}/>
    //         <button>Go!</button>
    //     </form>
        
    // )