import {  Route,  Routes } from "react-router-dom";
import DetailScreen from "../screens/DetailScreen";
import Dashboard from "../Componant/Views/Dashboard";
import LOGIN from "../Componant/Login";
// import {SignUp} from "../Componant/Login/SignUp";

export default function Router() {
  return (
      <Routes>
        <Route>
          <Route path="/"  element={<Dashboard />} />
          <Route path="/DetailScreen/:adId" element={<DetailScreen />} />
          <Route path="/LOGIN"element={<LOGIN/>}/>
          {/* <Route path="/SignUp"element={<SignUp/>}/> */}
    
        </Route>
      </Routes>
  );
}
