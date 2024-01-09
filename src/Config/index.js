import {  Route,  Routes } from "react-router-dom";
import DetailScreen from "../screens/DetailScreen";
import Dashboard from "../Componant/Views/Dashboard";


export default function Router() {
  return (
      <Routes>
        <Route>
          <Route path="/"  element={<Dashboard />} />
          <Route path="DetailScreen/:adId" element={<DetailScreen />} />
    
        </Route>
      </Routes>
  );
}
