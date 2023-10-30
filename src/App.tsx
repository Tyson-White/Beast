import {} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";

import MainProductsPage from "./pages/MainProducts.page.tsx";

function App() {

  return (
    <>
        <div className="font-MyFont">
            <Header  />
            <div className="">
                <Routes>
                    <Route path={'/'} element={<MainProductsPage/>}></Route>
                </Routes>
            </div>
        </div>

    </>
  );
}

export default App;
