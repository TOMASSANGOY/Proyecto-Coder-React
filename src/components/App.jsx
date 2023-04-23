import './App.css';

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
export const App = () => {
  return (
    <>
      <Navbar />
      <h1>Bienvenidos</h1>
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}