// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from "./pages/Page1.jsx";
// import Page2 from "./pages/Page2.jsx";
// import Page3 from "./pages/Page3.jsx";
// import Page4 from "./pages/Page4.jsx";

function App() {
  return (
    <div className="App">
      <Page1/>
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Page1/>} />
    //       <Route path="/study" element={<Page2/>} />
    //       <Route path="/project" element={<Page3/>} />
    //       <Route path="/seminar" element={<Page4/>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
