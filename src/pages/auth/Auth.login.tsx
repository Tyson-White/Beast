import {useState} from 'react';
import Auth from "./Auth.tsx";
import AuthInput from "./Auth.input.tsx";
import {useNavigate, } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/authSlice.ts";
const AuthLogin = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const dispatch = useDispatch()
    const onLoginUser = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(({user}) => {

                dispatch(setUser({
                    userId: user.uid,
                    email: user.email,
                    token: user.accessToken
                }))
                navigate('/')
                setEmailValue('')
                setPasswordValue('')
            })
            .catch(() => {
                setIsError(true)
                setEmailValue('')
                setPasswordValue('')
            });
    }

    return (
        <div className="relative font-bold text-white">
            <Auth/>
            <form action="" className="absolute top-0 left-[35%] top-[10%]">

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
                        <path d="M1 5H20.8242M20.8242 5L15.8682 1M20.8242 5L15.8682 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div className="mt-[20px] hover:border-b-[2px] w-[100px] cursor-pointer mx-auto text-center" onClick={() => navigate("/auth/register")}>Sign Up</div>
            </form>
        </div>
    );
};

export default AuthLogin;