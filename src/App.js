
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandFather from './component/GrandFather/GrandFather';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import OrderView from './component/OrderView/OrderView';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderView' element={<OrderView></OrderView>}></Route>
        <Route path='/grandfather' element={<GrandFather></GrandFather>}></Route>
      </Routes>
    </div>
  );
}

export default App;
