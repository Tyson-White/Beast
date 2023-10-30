import {useEffect, useState} from 'react';
import Auth from "./Auth.tsx";
import {useNavigate} from "react-router-dom";
import AuthInput from "./Auth.input.tsx";

const AuthRegister = () => {

    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState<string>()
    const [nameValue, setNameValue] = useState<string>()
    const [passwordValue, setPasswordValue] = useState<string>()
    const [acceptPasswordValue, setAcceptPasswordValue] = useState<string>()


    return (
        <div className={`relative font-bold text-white overflow-hidden `}>
            <Auth />
            <form action="" className="absolute top-0 left-[35%] top-[10%]">
                <AuthInput label={'Email'} getValue={(value) => setEmailValue(value)}/>
                <AuthInput label={'Name'} getValue={(value) => setNameValue(value)}/>
                <AuthInput label={'Password'} getValue={(value) => setPasswordValue(value)}/>
                <AuthInput label={'Accept password'} getValue={(value) => setAcceptPasswordValue(value)}/>
                <button className="bg-[#28282840] duration-150 hover:bg-[#282828] mt-[20px] w-[100%] h-[56px] rounded-[4px] flex justify-center items-center">
                    REGISTER
                    <svg className="ml-[10px]" width="20" height="25" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5H20.8242M20.8242 5L15.8682 1M20.8242 5L15.8682 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div className="text-center mt-[20px] hover:border-b-[2px] w-[100px] cursor-pointer mx-auto" onClick={() => navigate("/auth/login")}>Register</div>
            </form>
        </div>


    );
};

export default AuthRegister;