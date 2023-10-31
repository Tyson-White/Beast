import {useEffect} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import Header from "./components/Header";
import { getAuth, onAuthStateChanged,  } from "firebase/auth";
import MainProductsPage from "./pages/MainProducts.page.tsx";


import AuthLogin from "./pages/auth/Auth.login.tsx";
import AuthRegister from "./pages/auth/Auth.register.tsx";
import {useAppSelector} from "./store/hooks/hooks.ts";
import {setUser} from "./store/slices/authSlice.ts";
import {useDispatch} from "react-redux";

function App() {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const auth = getAuth()
    const dispatch = useDispatch()
    useEffect(() => {
        const user =  localStorage.getItem('user')

        if (user && JSON.parse(user)) {

            dispatch(setUser(JSON.parse(user)))
        }
    }, [])


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
