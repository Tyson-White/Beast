import {useEffect, useState} from 'react';
import Auth from "../components/Auth/Auth.tsx";
import AuthInput from "../components/Auth/Auth.input.tsx";
import {useNavigate, } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/authSlice.ts";
const AuthLoginPage = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 150)
    }, [])

    const onLoginUser = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(({user}) => {
                if (user.accessToken && user.email && user.uid) {
                    dispatch(setUser({
                        userId: user.uid,
                        email: user.email,
                        token: user.accessToken
                    }))
                    navigate('/')
                }

            })
            .catch(() => {
                setIsError(true)
            });
        setEmailValue('')
        setPasswordValue('')

    }

    return (
        <div className={`relative font-bold text-white -left-[2000px] opacity-0 ease-in-out duration-300 ${isVisible && "left-[0px] opacity-[1.0]"}`}>
            <Auth/>
            <form action="" className="absolute left-[35%] top-[10%]">

                <AuthInput label={'Email'} getValue={(value) => {
                    setEmailValue(value)
                    setIsError(false)
                }} type={'email'} value={emailValue}/>

                <AuthInput label={'Password'} getValue={(value) => {
                    setPasswordValue(value)
                    setIsError(false)
                }} type={'password'} value={passwordValue}/>

                <div className={`text-red-500 mt-2`}>{isError && "Incorrect email or password"}</div>
                <button onClick={(e) => {
                    e.preventDefault()
                    onLoginUser()
                }} className="bg-[#28282840] duration-150 hover:bg-[#282828] mt-[20px] w-[100%] h-[56px] rounded-[4px] flex justify-center items-center">
                    LOGIN
                    <svg className="ml-[10px]" width="20" height="25" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5H20.8242M20.8242 5L15.8682 1M20.8242 5L15.8682 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="mt-[20px] hover:border-b-[2px] w-[100px] cursor-pointer mx-auto text-center" onClick={() => navigate("/auth/register")}>Sign Up</div>
            </form>
        </div>
    );
};

export default AuthLoginPage;