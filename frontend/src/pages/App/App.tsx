import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "../../Layout";
import { HomePage } from "../HomePage/HomePage";
import { DiscountPage } from "../DiscountPage/DiscountPage";

import { Basket } from "../Basket/Basket";
import { ReviewsLayout } from "../Reviews/ReviewsLayout";
import { Contacts } from "../Contacts/Contacts";
import { Info } from "../Info/Info";
import { BouquetByIdPage } from "../BouquetByIdPage/BouquetByIdPage";
// import { Auth } from "../Auth/Auth";

// import { AdminRoute } from "../../pages/Route/AdminRoute";
import { PrivateRoute } from "../Route/PrivateRoute";
import { MyOrders } from "../../components/MyOrders/MyOrders";
import { ProfileLayout } from "../ProfileLayout/ProfileLayout";
import { Profile } from "../../components/Profile/Profile";
import { ChangePassword } from "../../components/ChangePassword/ChangePassword";
import { PublicRoute } from "../Route/PublicRoute";
import { Auth } from "../Auth/Auth";
// import { AdminPage } from "../AdminPage/AdminPage";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/discount" element={<DiscountPage />} />

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

        <Route path="/reviews" element={<ReviewsLayout />}></Route>

        <Route path="/basket" element={<Basket />} />

        <Route path="/bouquet/:id" element={<BouquetByIdPage />} />

        {/* <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        /> */}

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default App;
