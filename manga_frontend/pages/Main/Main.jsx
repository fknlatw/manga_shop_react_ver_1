import React, {useContext, useState, useEffect} from 'react';
import styles from './Main.module.css';

import { MangaContext } from '../../src/context/MangaContext';

import Slider from '../../src/components/Slider/Slider';
import Blog from '../../src/components/Blog/Blog';


const Main = () => {
    
    const { horrorManga, seinenManga } = useContext(MangaContext);

    
    
    

    return <div className={styles.main}>
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Подборка: Ужасы</h1>
            <Slider array={horrorManga} />

            <h1 className={styles.title}>Блог</h1>
            <Blog />

        </div>
    </div>
}

export default Main;