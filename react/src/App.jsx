import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import UpDate from "./pages/Update";
import Contact from "./pages/Contact";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} /> 
      <Route path="home" element={<Home/>} />
      <Route path="insert" element={<Insert/>} />
      <Route path="display" element={<Display/>} />
      <Route path="search" element={<Search/>} />
      <Route path="update" element={<UpDate/>} />
      <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;