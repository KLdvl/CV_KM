import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Knowledges} from "./pages/Knowledges";
import {Portfolio} from "./pages/Portfolio";
import {NotFound} from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/competences'} element={<Knowledges/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
