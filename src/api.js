import axios from "axios";
const API_KEY = '2f9097e7af7134119fcdce7363f2f155'

export const apiTrendMovies = async (signal) => {
    const TREND_URL = 'https://api.themoviedb.org/3/trending/movie/day';
    const options = {
        signal: signal,
        params: {
            api_key: API_KEY,            
        }
    }

    const responce = await axios.get(TREND_URL, options)
    return await responce.data
}

export const apiByNameMovies = async (movie, signal) => {
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie`
    const options = {
        signal: signal,
        params: {
            api_key: API_KEY,
            query: movie ,
            
        }
    }    
    const responce = await axios.get(SEARCH_URL, options)   
    return await responce.data
}

export const apiById = async (id, controller) => {

    const SEARCH_BY_ID = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
        signal: controller.signal,
        params: {
            api_key: API_KEY,
            
        }
    }    
    const responce = await axios.get(SEARCH_BY_ID, options)   
    return await responce.data
  
}

export const apiCast = async (id,controller) => {   

  

    const SEARCH_CAST = `https://api.themoviedb.org/3/movie/${id}/credits?`
    const options = {
        signal: controller.signal,
        params: {
            api_key: API_KEY,
            
        }
    }    
    const responce = await axios.get(SEARCH_CAST, options)   
    return await responce.data
  
}

export const apiReviews = async (id, controller) => {   

    const SEARCH_REVIEWS = `https://api.themoviedb.org/3/movie/${id}/reviews`
    const options = {
         signal: controller.signal,
        params: {
            api_key: API_KEY,
           
        }
    }    
    const responce = await axios.get(SEARCH_REVIEWS, options)   
    return await responce.data
  
}