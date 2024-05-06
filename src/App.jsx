import { useEffect, useState } from "react";
import "./App.css";
import Clientcard from "./components/Ders 4/Clientcard";
import { Fetchclient } from "./components/Ders 4/Fetchclient";
import Pizza from "./components/Pizza/Pizza";
import CustomButton from "./components/Ders 4/CustomButton/CustomButton";
import Employees from "./components/Modul 4.9/Employees";
import Info from "./components/Modul 4.10/Info";
import SearchEmployee from "./components/Modul 4.10/SearchEmployee";
import SplideApp from "./components/Modul 4.9/Splide";
// import TodoList from "./components/ToDoList/TodoList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/Client Routing/About";
import Contact from "./components/Client Routing/Contact";
import WorkExample from "./components/Client Routing/WorkExample";
import Nav from "./components/Client Routing/Nav";

function App() {
  // const [state,setState] = useState([])

  // useEffect(() => {
  //   Fetchclient().then(client => setState(client))
  // }, [])

  return (
    <>
      {/* <TodoList/> */}
      {/* <Pizza /> */}
      {/* <Clientcard name={state.name} phone={state.phone} card={state.card} /> */}
      {/* <CustomButton/> */}
      {/* <Employees/> */}
      {/* <Info/> */}
      {/* <SearchEmployee/> */}
      {/* <SplideApp/> */}
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="workexample/*" element={<WorkExample />} />
      </Routes>
    </>
  );
}

export default App;
