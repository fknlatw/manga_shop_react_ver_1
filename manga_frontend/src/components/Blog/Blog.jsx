import React, {useContext} from 'react';

import styles from './Blog.module.css';
import { BlogContext } from '../../context/BlogContext';


const Blog = () => {
    const {blogItems} = useContext(BlogContext);

    
    
    return <div className={styles.blogContainer}>
        {   
            blogItems.map((item) => {
                
                    return <div key={item.blogid} className={styles.blogItem} >
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
    </div> 
    
    
    
    
    
}

export default Blog;