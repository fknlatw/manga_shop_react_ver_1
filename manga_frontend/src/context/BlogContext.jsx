import React , {createContext, useState, useEffect} from 'react';
export const BlogContext = createContext();

const BlogProvider = ({children}) => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(()=>{
        const fetchBlogItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/blog')
                const data = await response.json();  
                setBlogItems(data);        
            } catch (error) {
                console.log(error);
            }
            
        }

        fetchBlogItems();
        
    },[]);

    return <BlogContext.Provider value={{blogItems}}>
        {children}
    </BlogContext.Provider>
}

export default BlogProvider;