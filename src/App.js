import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/home";
import NoMatch from './pages/404';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/404" element={<notFound />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
