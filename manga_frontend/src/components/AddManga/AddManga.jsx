import {useState} from 'react';
import './styles.css';

const AddManga = () =>{
    const [newManga, setNewManga] = useState({
        series: '',
        name: '{}',
        volume: 0,
        author: '{}',
        publisher: '',
        img: 'http://localhost:5000/',
        genre: '{}',
        price: 0,
        description: ''
    });

    const handleClick = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/manga", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newManga)
            });
            window.location='/edit'
            console.log(JSON.stringify(newManga))
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form>
            Серия

            <input
                value={newManga.series} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    series: e.target.value
                }))}
                type="text" 
                placeholder="series"
            />

            Название

            <input 
                value={newManga.name} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    name: `${e.target.value}`
                }))}
                type="text" 
                placeholder="name"
            />

            Номер тома

            <input
                value={newManga.volume} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    volume: Number(e.target.value)
                }))}
                type="number" 
                placeholder="volume"
                min="-1"
            />

            Автор

            <input 
                value={newManga.author} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    author: `${e.target.value}`
                }))}
                type="text" 
                placeholder="author"
            />
            
            Издатель

            <input 
                value={newManga.publisher} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    publisher: `${e.target.value}`
                }))}
                type="text" 
                placeholder="publisher"
            />
            
            Картинка

            <input 
                value={newManga.img} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    img: `${e.target.value}`
                }))}
                type="text" 
                placeholder="img"
            />
            
            Жанр

            <input 
                value={newManga.genre} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    genre: `${e.target.value}`
                }))}
                type="text" 
                placeholder="genre"
            />
            
            Цена

            <input 
                value={newManga.price} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    price: Number(e.target.value)
                }))}
                type="number" 
                placeholder="price"
                min="0"
            />
            
            Описание

            <textarea 
                value={newManga.description} 
                onChange={e=>setNewManga((value)=>({
                    ...value,
                    description: e.target.value
                }))}
                type="text" 
                placeholder="description"
                rows={6}
            />

            <button onClick={e=>handleClick(e)}>Add To Database</button>
        </form>
    )
}

export default AddManga;