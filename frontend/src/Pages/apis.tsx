import axios from 'axios'
import React from 'react'
import { CompanySearch } from '../api'
import { exec } from 'child_process'
import { error } from 'console'

interface searchResponse {
    data: CompanySearch[]
}


const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`);

        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message", error.message)
            return error.message
        }
        else{
            console.log("unexpected error",error)
            return "An unexpected error just happend. keep chillinga";

        }

    }
    
}

export default searchCompanies
