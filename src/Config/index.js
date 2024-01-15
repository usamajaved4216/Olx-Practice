import {  Route,  Routes } from "react-router-dom";
import DetailScreen from "../screens/DetailScreen";
import Dashboard from "../Componant/Views/Dashboard";
import Signin from "../Componant/Signin";
import Signup from "../Componant/Signup";


export default function Router() {
  return (
      <Routes>
        <Route>
          <Route path="/"  element={<Dashboard />} />
          <Route path="/DetailScreen/:adId" element={<DetailScreen />} />
          <Route path="/Login"element={<Signin/>} />
          <Route path="/register" element={<Signup/>} />    
        </Route>
      </Routes>
  );
}
