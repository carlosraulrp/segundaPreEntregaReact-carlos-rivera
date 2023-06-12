import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {ItemListContainer, ItemsDetailContainer} from './pages';
import { Header } from './components/layouts/header/Header';











function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path = "/" element = {<ItemListContainer/>} />
        <Route path = "/category/:categoId" element = {<ItemListContainer/>} />
        <Route path = "/items-detail/:id" element = {<ItemsDetailContainer/>} />
        
        
      </Routes>


      
      
      
      
    </BrowserRouter>
    
  );
}

//añadimos iconos de la libreria
library.add(faCartShopping)

export default App;
