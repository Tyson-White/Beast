import {useState} from 'react';
import Auth from "./Auth.tsx";
import {useNavigate} from "react-router-dom";
import AuthInput from "./Auth.input.tsx";

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/authSlice.ts";

const AuthRegister = () => {

    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [acceptPasswordValue, setAcceptPasswordValue] = useState<string>('')

    const dispatch = useDispatch()

    const onRegisterUser = () => {
        if (emailValue && passwordValue && acceptPasswordValue === passwordValue) {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then(({user}) => {

                    dispatch(setUser({
                        userId: user.uid,
                        email: user.email,
                        token: user.accessToken
                    }))
                    navigate('/')
                    setEmailValue('')
                    setPasswordValue('')
                    setAcceptPasswordValue('')
                })
                .catch(() => {
                    setEmailValue('')
                    setPasswordValue('')
                    setAcceptPasswordValue('')
                });
        }

    }

    return (
        <div className={`relative font-bold text-white overflow-hidden `}>

            <Auth />
            <form action="" className="absolute top-0 left-[35%] top-[10%]">

                <AuthInput label={'Email'} getValue={(value) => setEmailValue(value)} type={'email'} value={emailValue}/>
                <AuthInput label={'Password'} getValue={(value) => setPasswordValue(value)} type={'password'} acceptValue={acceptPasswordValue} value={passwordValue}/>
                <AuthInput label={'Accept password'} getValue={(value) => setAcceptPasswordValue(value)} type={'password'} acceptValue={passwordValue} value={acceptPasswordValue}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    onRegisterUser()
                }} className="bg-[#28282840] duration-150 hover:bg-[#282828] mt-[20px] w-[100%] h-[56px] rounded-[4px] flex justify-center items-center">
                    Sign Up
                    <svg className="ml-[10px]" width="20" height="25" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5H20.8242M20.8242 5L15.8682 1M20.8242 5L15.8682 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div className="text-center mt-[20px] hover:border-b-[2px] w-[100px] cursor-pointer mx-auto" onClick={() => navigate("/auth/login")}>Login</div>
            </form>
        </div>


    );
};

export default AuthRegister;