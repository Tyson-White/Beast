import {} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";

import MainProductsPage from "./pages/MainProducts.page.tsx";


import AuthLogin from "./pages/auth/Auth.login.tsx";
import AuthRegister from "./pages/auth/Auth.register.tsx";

function App() {


  return (
    <>
        <div className="font-MyFont">
            <Header  />
            <div className="">
                <Routes>
                    <Route path={'/'} element={<MainProductsPage/>}></Route>
                    <Route path={'/auth/login'} element={<AuthLogin/>}></Route>
                    <Route path={'/auth/register'} element={<AuthRegister/>}></Route>
                </Routes>
            </div>
        </div>

    </>
  );
}

export default App;
