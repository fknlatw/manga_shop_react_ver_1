import React, {useContext, useState, useEffect} from 'react';

import styles from './Blog.module.css';
import { BlogContext } from '../../context/BlogContext';


const Blog = () => {
    const {blogItems} = useContext(BlogContext);
    const [page, setPage] = useState(1);
    
    const handleClick = (e) => {
        if(e.target.innerHTML === "Больше"){
            setPage(page + 1);
        } else {
            setPage(1);
        }
    }

    return <div className={styles.blogContainer}>
        {   
            blogItems.slice(0, page * 3).map((item) => {
                return <div className={styles.blogItem} key={item.blogid} >
                    <div className={styles.blogImgContainer}>
                        <img className={styles.blogImg} src={item.blogimg} alt="" />
                    </div> 
                    <div className={styles.blogTextContainer}>
                        <h4 className={styles.blogTitle}>{item.blogtitle}</h4>
                        <p className={styles.blogText}>{item.blogtext}</p>
                    </div>
                </div>
            })
        }
        <button className={styles.blogButton} onClick={(e)=>handleClick(e)}>
            {
                (page * 3) < blogItems.length
                ? "Больше"
                : "Скрыть"
            }
        </button>
    </div> 
}

export default Blog;