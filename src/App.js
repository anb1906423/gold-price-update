import Home from './page/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Update from './page/Update';
import { useState } from 'react';
function App() {
    const [isAdmin, setIsAdmin] = useState(true);
    return (
        <Routes>
            <Route path="/" element={<Layout isAdmin={isAdmin} />}>
                <Route>
                    <Route path="/home" element={<Home />} />
                </Route>
                {isAdmin && (
                    <Route>
                        <Route path="/updateprice" element={<Update isAdmin={isAdmin} />} />
                    </Route>
                )}
            </Route>
        </Routes>
    );
}

export default App;
