import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { useState } from 'react';
import IsLoggedContext from './context/isLogged';
import NewProduct from './pages/NewProduct';
import Logout from './pages/Logout';

function App() {
    const [isLogged, setIsLogged] = useState(false)
    return (
        <div>
            <IsLoggedContext.Provider
                value={{
                    isLogged: isLogged,
                    setIsLogged: setIsLogged
                }}
            >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Registration />} />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/add-product"
                            element={isLogged ? <NewProduct /> : <Login />}
                        />
                        <Route
                            path="/logout"
                            element={<Logout/>}
                        />
                    </Routes>
                </Router>
            </IsLoggedContext.Provider>
        </div>
    );
}

export default App;
