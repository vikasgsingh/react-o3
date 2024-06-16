import "./App.css";
import Counter from "./component/Counter";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Block from "./component/State";
import Increament from "./component/Increament";
import Count from "./component/Count";
import Add from "./component/add";
import HookCounterOne from "./component/HookCounter0ne";
import Toggle from "./component/Toggle";
import Biodata from "./component/Biodata";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import Menu from "./component/Menu";
import About from './Pages/About'
import Product from "./Pages/Product";
import Service from "./Pages/Service";
import ComponentA from "./component/ComponentA";
import CustomCounter from "./component/CustomCounter";
import Login from "./Pages/Login";
import TodoList from "./component/TodoList/TodoList";


function App() {
  return (
    <div className="App">

      {/* <CustomCounter/> */}

      {/* <ComponentA/> */}

      {/* <TodoList/> */}

      {/* <Data/> */}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>

      {/* <Biodata/> */}

      {/* <HookCounterOne/> */}

      {/* <Count /> */}
      {/* <Toggle/> */}

      {/* <Add/> */}

      {/* <Increament/> */}

      {/* <Greet/> */}

      {/* <Greet name='abhay'>
       <h5>children01</h5> 
      </Greet> */}

      {/* <Greet name='abhay'>
       <h5>children01</h5> 
      </Greet>
      <Greet  name='devansh'>
        <button>click me</button>
      </Greet>
      <Greet  name='nirbhay'></Greet> */}
      {/* <Welcome name='abhay'>
       <h5>children01</h5> 
      </Welcome>
      <Welcome  name='devansh'>
        <button>click me</button>
      </Welcome>
      <Welcome  name='nirbhay'></Welcome> */}

      {/* <Welcome/> */}
      {/* <Greet>
      </Greet> */}

      {/* <Counter/> */}
    </div>
  );
}

export default App;
