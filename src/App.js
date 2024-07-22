import Home from "./Components/Home";
import Sign from "./Components/Sign";
import Login from "./Components/Login";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
 return(
  <>
<Router>
<Routes>
 <Route path='/' element={<Login/>}/>
 <Route  path='/Sign' element={<Sign/>}/>
 <Route  path='/Home' element={<Home/>}/>
</Routes>
</Router>
  </>
 )
}

export default App;
