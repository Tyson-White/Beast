import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import MainProductsPage from "./pages/MainProducts.page.tsx";
import AuthLogin from "./pages/auth/Auth.login.tsx";
import AuthRegister from "./pages/auth/Auth.register.tsx";
import {setUser} from "./store/slices/authSlice.ts";
import {useDispatch} from "react-redux";
import ProfilePage from "./pages/Profile.page.tsx";

function App() {
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
                    <Route path={'/profile'} element={<ProfilePage/>}></Route>
                </Routes>
            </div>
        </div>

    </>
  );
}

export default App;
