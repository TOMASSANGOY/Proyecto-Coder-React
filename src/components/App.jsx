import './App.css';
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

export const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}


export default App;