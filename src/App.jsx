import React from 'react';
import "./CSS/index.scss";
import Navbar from "./components/Navbar";
import { CartProvider } from "./Contexts/CartContext";
function App() {

    return (
        <CartProvider>
            <div className="App">
                <Navbar />
            </div>
        </CartProvider>
        
    );
}

export default App;
