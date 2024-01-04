import { useState } from "react"
import "./index.css"
import {Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Book from "./pages/book"
import Booklist from "./pages/Booklist"

function App() {
  return (
    <>

    <nav>
       <ul className="items-center justify-center">
         <li className="text-red-300 font-bold">
          <Link to="/"> .Home</Link>
         </li>
         <li className="text-red-300 font-bold">
           <Link to="/books"> .Books</Link>
         </li>
       </ul>
    </nav>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books" element={<Book/>}
      />
      <Route path="/books/:id" element={<Booklist/>}></Route>
     </Routes>
    </>
  )
}

export default App
