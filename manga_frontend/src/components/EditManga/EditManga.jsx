import {useState, useContext} from 'react';
import './styles.css';
import { MangaContext } from '../../context/MangaContext';

const EditManga = () => {
    const [getId, setGetId] = useState(0);
    const [editManga, setEditManga] = useState({
        series: '',
        name: '{}',
        volume: 0,
        author: '{}',
        publisher: '',
        img: '',
        genre: '{}',
        price: 0,
        description: ''
    });
    const {manga} = useContext(MangaContext);

    console.log(manga);
    const handleClick = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/manga/${getId}`);
            const data = await response.json();
            setEditManga(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async(e) => {
        e.preventDefault();
        try {
            const body ={
                id: editManga.id,
                series: editManga.series,
                name: `{${editManga.name}}`,
                volume: editManga.volume,
                author: `{${editManga.author}}`,
                publisher: editManga.publisher,
                img: editManga.img,
                genre: `{${editManga.genre}}`,
                price: editManga.price,
                description: editManga.description
            }
            const response = await fetch(`http://localhost:5000/manga/${editManga.id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location='/edit';
            console.log(JSON.stringify(body));
        } catch (error) {
            console.log(error);
        }
    }

    

    return <form>
        <div>   
            <input
                value={getId}
                onChange={e=>setGetId(e.target.value)} 
                max={manga.length}
                min="0"
                type="number" 
            />

            <button onClick={e=>handleClick(e)}>find by id</button>
        </div>

        
        
        <div>
                <h3>Серия</h3>
                <input 
                    type="text"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        series: e.target.value
                    }))} 
                    value={editManga.series}
                />   
                <h3>Название</h3>
                <input 
                    type="text"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        name: e.target.value
                    }))} 
                    value={editManga.name}
                />
                <h3>Номер Тома</h3>
                <input 
                    type="number"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        volume: Number(e.target.value)
                    }))} 
                    value={editManga.volume}
                />
                <h3>Автор</h3>
                <input 
                    type="text"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        author: e.target.value
                    }))} 
                    value={editManga.author}
                />
                <h3>Издатель</h3>
                <input 
                    type="text"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        publisher: e.target.value
                    }))} 
                    value={editManga.publisher}
                />
                <h3>Картинка</h3>
                <input 
                    type="text"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        img: e.target.value
                    }))} 
                    value={editManga.img}
                />
                <h3>Жанр</h3>
                <input 
                    type="text"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        genre: e.target.value
                    }))} 
                    value={editManga.genre}
                />
                <h3>Цена</h3>
                <input 
                    type="number"
                    onChange={e=>setEditManga(value => ({
                        ...value,
                        price: Number(e.target.value)
                    }))} 
                    value={editManga.price}
                />
                <h3>Описание</h3>
            <textarea 
                rows={6} 
                type="text"
                onChange={e=>setEditManga(value => ({
                    ...value,
                    description: e.target.value
                }))} 
                value={editManga.description}
            />
            <button onClick={e=>handleEdit(e)}>save edited</button>
        </div>
        
        
    </form>
}

export default EditManga;