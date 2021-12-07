import './App.css';
import Create from './components/product/Create';
import Read from './components/product/Read';
import Update from './components/product/Update';
import Products from "./components/Products";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

function App() {
    return (
    <div className="main">
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='' element={<Products />} />
                    <Route exact path='/create' element={<Create />}/>
                    <Route exact path='/read' element={<Read />}/>
                    <Route exact path='/update' element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
    );
}

export default App;