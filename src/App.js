import Home from "./route/home/home.component";
import { Route, Routes, Outlet } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";

const Shop = () => {
  return <h1>shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
