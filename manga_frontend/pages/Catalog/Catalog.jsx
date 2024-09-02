import React, {useContext, useState} from 'react';
import {FaShoppingBag} from 'react-icons/fa';
import Search from '../../src/components/Search/Search';


import { MangaContext } from '../../src/context/MangaContext';

import "./Catalog.css";
import { CartContext } from '../../src/context/CartContext';

const Home = () => {
    const {manga, isLoading} = useContext(MangaContext);
    const {addToCart} = useContext(CartContext);
    
    

    if(isLoading){
        return <div className="skeleton">
            {
                manga.map((_, index) => {
                    return <div key={index} className="skeletonCard"></div>
                })
            }
        </div>
    }

    const [books, setBooks] = useState([...manga]);
    

    return <div className="container">
        <Search setBooks={setBooks} allBooks={manga} />
        {   
            books.map(book=>{
                return <div className="card" key={book.id}>
                    
                    <img className="img" src={book.img}/>
                    
                    <div className="info" >
                        <span className="seriesName">{
                            book.volume >= 0
                            ? `${book.series}, том ${book.volume}`
                            :`${book.name}`}
                        </span>
                        <span className="author">
                            {book.author.join(",")}
                        </span>
                        <div className="pricing">
                            <span className="price">
                                {book.price} р
                            </span>
                            <button onClick={()=>addToCart(book)} className="addToCard">
                                <FaShoppingBag />
                            </button>
                        </div>
                    </div>  
                </div>
            })
        }
    </div>
}

export default Home;