import MangaTable from "./components/MangaTable/MangaTable";
import AddManga from "./components/AddManga/AddManga";
import EditManga from "./components/EditManga/EditManga";

function App() {
  return (
    <>
      <div className="container">
        <h2>СПИСОК КНИГ</h2>
        <MangaTable />
        <h2>ИЗМЕНИТЬ КНИГУ</h2>
        <EditManga/>
        <h2>ДОБАВИТЬ КНИГУ</h2>
        <AddManga />

      </div>
    </>
  )
}

export default App
