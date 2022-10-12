import Home from './page/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Update from './page/Update';
import { useState, createContext } from 'react';

export const LoginContext = createContext();

function App() {
    const [login, setLogin] = useState(false);

    const [loginMount, setLoginMount] = useState(false);

    return (
        <LoginContext.Provider value={{ login, loginMount, setLogin, setLoginMount }}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route>
                        <Route path="/home" element={<Home />} />
                    </Route>
                    {login && (
                        <Route>
                            <Route path="/updateprice" element={<Update />} />
                        </Route>
                    )}
                </Route>
            </Routes>
        </LoginContext.Provider>
    );
}

export default App;
