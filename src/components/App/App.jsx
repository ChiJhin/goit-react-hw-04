import SearchBar from '../SearchBar/SearchBar'
import  { Toaster } from 'react-hot-toast';
import searchCardByQuery from '../../fetch-api';
import { useState, useEffect } from 'react'
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMore from '../LoadMore/LoadMore';


import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [pictures, setPictures] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchCard = async (newQuery) => {
    setQuery(newQuery)
    setPage(1)
    setPictures([])
    setLoading(false)
    setError(false)
    
  }

 const hendelLoadMore = () => {
  setPage(page + 1)
 }
  
useEffect(()=> {
  if (query === '') {
    return
  }
  async function fetchData () {
  
    try{
      setError(false)
      setPictures([])
      setLoading(true)
        const getQuery = await searchCardByQuery(query, page)
        console.log(getQuery.data);
        setTotalPages(getQuery.data.total_pages)
        setPictures([...pictures, ...getQuery.data.results])
        
    }catch(error){
      setError(true)
    } finally { setLoading(false)}
  }
  fetchData()
  console.log(query, page);
}, [query, page])
 

  return (
    <>
     <SearchBar onSearch={searchCard} />
     
     {error && <b>Oops, there was an error, please try reloading 😭</b>}
     
     <ImageGallery pictures={pictures} />
     {loading && <b>Loading articles, please wait...</b>}
     
     {query.length > 0 && page < totalPages && (<LoadMore onClick={hendelLoadMore}/>)}
     <Toaster position='top-right'/>
    </>
  )
}

export default App
