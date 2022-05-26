import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddTool from "./Pages/Dashboard/AddTool/AddTool";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EditProfile from "./Pages/Dashboard/EditProfile/EditProfile";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import AddMoreInfo from "./Pages/Dashboard/MyProfile/AddMoreInfo/AddMoreInfo";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="myProfile/addMoreInfo" element={<AddMoreInfo />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="makeAdmin" element={<AllUsers />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route path="addTool" element={<AddTool />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
