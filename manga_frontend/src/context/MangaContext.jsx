import React, {createContext, useEffect, useState} from 'react';

export const MangaContext = createContext();

const MangaProvider = ({children}) => {
    const [manga, setManga] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        const fetchManga = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:5000/manga')
                const data = await response.json();
                setManga(data);
                setIsLoading(false);                
            } catch (error) {
                console.log(error);
            }
        }

        fetchManga();
    },[]);

    const mixedManga = manga.sort((book) => Math.random()-0.5).slice(1, 9);

    return (
        <MangaContext.Provider value={{
            manga, 
            setManga,
            isLoading,
            mixedManga
        }}>
            {children}
        </MangaContext.Provider>
    )
}

export default MangaProvider;