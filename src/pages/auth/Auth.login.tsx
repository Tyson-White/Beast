import {useState} from 'react';
import Auth from "./Auth.tsx";
import AuthInput from "./Auth.input.tsx";
import {useNavigate} from "react-router-dom";

const AuthLogin = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState<string>()
    const [passwordValue, setPasswordValue] = useState<string>()
    return (
        <div className="relative font-bold text-white">
            <Auth/>
            <form action="" className="absolute top-0 left-[35%] top-[10%]">
                <AuthInput label={'Email'} getValue={(value) => setEmailValue(value)}/>
                <AuthInput label={'Password'} getValue={(value) => setPasswordValue(value)}/>
                <button className="bg-[#28282840] duration-150 hover:bg-[#282828] mt-[20px] w-[100%] h-[56px] rounded-[4px] flex justify-center items-center">
                    LOGIN
                    <svg className="ml-[10px]" width="20" height="25" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5H20.8242M20.8242 5L15.8682 1M20.8242 5L15.8682 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div className="mt-[20px] hover:border-b-[2px] w-[100px] cursor-pointer mx-auto text-center" onClick={() => navigate("/auth/register")}>Register</div>
            </form>
        </div>
    );
};

export default AuthLogin;