import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "../../Layout";
import { HomePage } from "../HomePage/HomePage";
import { Category } from "../Category/Category";
import { LogIn } from "../LogIn/LogIn";
import { Basket } from "../Basket/Basket";
import { Reviews } from "../Reviews/Reviews";
import { Contacts } from "../Contacts/Contacts";
import { Info } from "../Info/Info";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
