import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin ? (
          <>
            <Route
              path="/"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <Home />
                  </div>
                </>
              }
            />
            <Route
              path="/users"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <UserList />
                  </div>
                </>
              }
            />
            <Route
              path="/user/:userId"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <User />
                  </div>
                </>
              }
            />
            <Route
              path="/newUser"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <NewUser />
                  </div>
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <ProductList />
                  </div>
                </>
              }
            />
            <Route
              path="/product/:productId"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <Product />
                  </div>
                </>
              }
            />
            <Route
              path="/newproduct"
              element={
                <>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <NewProduct />
                  </div>
                </>
              }
            />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;








// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.css";
// import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import Login from "./pages/login/Login";
// import { useSelector } from "react-redux";

// function App() {
//   const admin = useSelector((state) => state.user.currentUser.isAdmin);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login">
//           <Login />
//         </Route>
//         {admin && (
//           <>
//             <Topbar />
//             <div className="container">
//               <Sidebar />
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path="/users">
//                 <UserList />
//               </Route>
//               <Route path="/user/:userId">
//                 <User />
//               </Route>
//               <Route path="/newUser">
//                 <NewUser />
//               </Route>
//               <Route path="/products">
//                 <ProductList />
//               </Route>
//               <Route path="/product/:productId">
//                 <Product />
//               </Route>
//               <Route path="/newproduct">
//                 <NewProduct />
//               </Route>
//             </div>
//           </>
//         )}
//       </Switch>
//     </Router>
//   );
// }

// export default App;
