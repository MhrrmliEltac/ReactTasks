import { useEffect, useState } from "react";
import "./App.css";
import Clientcard from "./components/Ders 4/Clientcard";
import { Fetchclient } from "./components/Ders 4/Fetchclient";
import Pizza from "./components/Pizza/Pizza";
import CustomButton from "./components/Ders 4/CustomButton/CustomButton";
import Employees from "./components/Modul 4.9/Employees";
import Info from "./components/Modul 4.10/Info";
import SearchEmployee from "./components/Modul 4.10/SearchEmployee";
// import TodoList from "./components/ToDoList/TodoList";



function App() {

  const [state,setState] = useState([])

  useEffect(() => {
    Fetchclient().then(client => setState(client))
  }, [])



  return (
    <>
      {/* <TodoList/> */}
      {/* <Pizza /> */}
      {/* <Clientcard name={state.name} phone={state.phone} card={state.card} /> */}
      {/* <CustomButton/> */}
      {/* <Employees/> */}
      {/* <Info/> */}
      <SearchEmployee/>
    </>
  );
}

export default App;
