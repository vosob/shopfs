import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "../../Layout";
import { HomePage } from "../HomePage/HomePage";
import { Category } from "../Category/Category";

import { Basket } from "../Basket/Basket";
import { Reviews } from "../Reviews/Reviews";
import { Contacts } from "../Contacts/Contacts";
import { Info } from "../Info/Info";
import { BouquetByIdPage } from "../BouquetByIdPage/BouquetByIdPage";
import { Auth } from "../Auth/Auth";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/basket" element={<Basket />} />

        <Route path="/bouquet/:id" element={<BouquetByIdPage />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
