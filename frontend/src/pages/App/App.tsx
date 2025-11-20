import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "../../Layout";
import { HomePage } from "../HomePage/HomePage";
import { Discount } from "../Discount/Discount";

import { Basket } from "../Basket/Basket";
import { Reviews } from "../Reviews/Reviews";
import { Contacts } from "../Contacts/Contacts";
import { Info } from "../Info/Info";
import { BouquetByIdPage } from "../BouquetByIdPage/BouquetByIdPage";
// import { Auth } from "../Auth/Auth";

// import { PublicRoute } from "../../pages/Route/PublicRoute";
import { PrivateRoute } from "../Route/PrivateRoute";
import { MyOrders } from "../../components/MyOrders/MyOrders";
import { ProfileLayout } from "../ProfileLayout/ProfileLayout";
import { Profile } from "../../components/Profile/Profile";
import { ChangePassword } from "../../components/ChangePassword/ChangePassword";
import { PublicRoute } from "../Route/PublicRoute";
import { Auth } from "../Auth/Auth";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/info" element={<Info />} />
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/personalPage"
          element={
            <PrivateRoute>
              <ProfileLayout />
            </PrivateRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="myOrder" element={<MyOrders />} />
          <Route path="password" element={<ChangePassword />} />
        </Route>

        <Route path="/basket" element={<Basket />} />

        <Route path="/bouquet/:id" element={<BouquetByIdPage />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
