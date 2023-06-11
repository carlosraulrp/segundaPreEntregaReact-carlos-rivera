import { Header } from "../../components/layouts/header/Header";
import { ItemList } from "../../components/itemList/ItemList";

function Home(){

    return(
        <div>
            <Header/>
            <ItemList/>
        </div>  
    )
}

export {Home};