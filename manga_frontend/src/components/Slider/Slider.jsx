import React, {useState} from 'react';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import styles from './Slider.module.css';

const Slider = ({array}) => {
    const [slide, setSlide] = useState(Math.floor(Math.random() * array.length));

    const nextSlide = () => {
        setSlide(slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide - 1);
    }

    const setDescription = (string) => {
        return `${string.split(" ").slice(0, 30).join(" ")}...`;
    }

    return <div className={styles.slider}>
                
                {
                    array.map((book) => {
                        return <div 
                            className={styles.slide} 
                            key={book.id}
                            style={{transform: `translateX(-${(slide) * 100}%)`}}
                        >
                            <div className={styles.infoContainer}>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={book.img} alt="" />    
                                </div>

                                <div className={styles.info}>
                                    <p className={styles.author}>{book.author}</p>
                                    <p className={styles.seriesName}>{
                                        book.volume > 0
                                        ?`${book.series}, том ${book.volume}`
                                        :`${book.name}`
                                    }</p>
                                    <p className={styles.description}>{setDescription(book.description)}</p>
                                </div>
                            </div>
                        </div>
                    })
                }

                <button
                    onClick={(e)=>nextSlide(e)} 
                    className={`${styles.nextBtn} 
                        ${slide + 1 === array.length ? `${styles.disabled}`:``}`}
                ><FaArrowRight /></button>
                <button 
                    onClick={(e)=>prevSlide(e)}
                    className={`${styles.prevBtn}
                        ${slide === 0? `${styles.disabled}`:``}`}
                ><FaArrowLeft /></button>
            </div>


}

export default Slider;