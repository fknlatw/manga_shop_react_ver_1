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

    const horrorManga = manga.filter(book => {
        for(let i in book.genre){
            if(book.genre[i] === "Ужасы"){
                return book;
            }
        }
    });

    const seinenManga = manga.filter(book=>{
        for(let i in book.genre){
            if(book.genre[i] === "Сейнен"){
                return book;
            }
        }
    });



    return (
        <MangaContext.Provider value={{
            manga, 
            setManga,
            isLoading,
            horrorManga,
            seinenManga
        }}>
            {children}
        </MangaContext.Provider>
    )
}

export default MangaProvider;