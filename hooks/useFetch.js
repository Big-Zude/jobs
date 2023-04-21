import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_TOKEN } from '@env'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': API_TOKEN,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  }
  const fetcData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.request(options)
      setData(response.data.data)
    } catch (error) {
      setIsLoading(false)
      alert('there is an error')
    }
  }

  useEffect(() => {
    fetcData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch
