import React, {createContext, useEffect, useState} from 'react';

export const MangaContext = createContext();

const MangaProvider = ({children}) => {
    const [manga, setManga] = useState([]);

    useEffect(()=>{
        const fetchManga = async () => {
            try {
                const response = await fetch('http://localhost:5000/manga');
                const data = await response.json();
                setManga(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchManga();
    },[]);

    return (
        <MangaContext.Provider value={{
            manga, 
            setManga
        }}>
            {children}
        </MangaContext.Provider>
    )
}

export default MangaProvider;