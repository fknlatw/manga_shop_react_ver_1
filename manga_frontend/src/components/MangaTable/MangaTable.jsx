import React, {useContext} from 'react';
import { MangaContext } from '../../context/MangaContext';
import './styles.css';


const MangaTable = () => {
    const {manga} = useContext(MangaContext);

    return <table>
        
        <thead>
            <tr>
                <th>id</th>
                <th>series</th>
                <th>name</th>
                <th>volume</th>
                <th>author</th>
                <th>publisher</th>
                <th>img</th>
                <th>genre</th>
                <th>price</th>
                <th>description</th>
            </tr>
        </thead>
        <tbody>
            {
                manga.map(book=>{
                    const {
                        id, series, name, 
                        volume, author, publisher,
                        img, genre, price, description
                    } = book;
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{series}</td>
                            <td>{name}</td>
                            <td>{volume}</td>
                            <td>{author}</td>
                            <td>{publisher}</td>
                            <td>{img}</td>
                            <td>{genre}</td>
                            <td>{price}</td>
                            <td>{description}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        <tfoot>
            <tr>
                <td colSpan='9' align='end'>total manga</td>
                <td>{manga.length}</td>
            </tr>
        </tfoot>
    </table>
}

export default MangaTable;