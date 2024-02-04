





import axios from 'axios';

 const searchCardByQuery = async (query, page) => {
    const baseURL = 'https://api.unsplash.com/search/photos?';
    const params = new URLSearchParams ({
        client_id: '8k_upkdIZko38FUCMx1oFIKr89iGRE6EpUYik3AMuNQ',
        page,
        query,
        per_page: 20,
    })
    try{
        const getQuery = await axios.get(`${baseURL}&${params}`)
        console.log(getQuery.data);
        return getQuery
    }catch(error){error => console.log(error)}
    
    
  
    
}


export default searchCardByQuery
