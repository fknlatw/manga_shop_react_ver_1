import React, {useState, useContext} from 'react';
import styles from './Search.module.css';

const Search = ({setBooks, allBooks}) => {
    const [searchText, setSearchText] = useState("");

    const searchResult = () => {
        const result = allBooks.filter((book)=>{
            for(let i in book.name){
                if(book.name[i].toLowerCase().includes(searchText.toLowerCase())){
                   return book; 
                }
            }

            if(book.series.toLowerCase().includes(searchText.toLowerCase())){
                return book;
            }
        });

        setBooks(result);
    }

    return <div className={styles.searchContainer}>
        <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="text" className={styles.searchInput}/>
        <button className={styles.searchButton} onClick={()=>searchResult()}>Поиск</button>
    </div>
}

export default Search;