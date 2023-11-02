import {useState} from "react";


// icons
import heart from "../../assets/icons/heart.svg"
import cart from "../../assets/icons/cart.svg"
import profile from "../../assets/icons/profile.svg"
import loginIcon from "../../assets/icons/login.svg"
import home from "../../assets/icons/home.svg"

import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../store/hooks/hooks.ts";

// components
import SexSelect from "../Selects/SexSelect.tsx";
import NavButtonHeader from "./NavButton.header.tsx";
export default function Header() {
    const [page, setPage] = useState<string>('Home')
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const togglePage = (name: string):void => {
        setPage(name)
    }

    return (
        <div className="header h-[80px]">
            <div className="container h-[100%] max-w-[1100px] mx-auto">
                <div className="h-[100%] flex justify-between items-center">
                    <SexSelect/>
                    <div className="text-[54px] absolute left-[47%] font-bold text-white cursor-pointer" onClick={() => togglePage('')}>BEAST</div>
                    <div className="flex justify-between text-white h-[40px] w-[230px] ">
                        <NavButtonHeader page={page} setPage={(page) => setPage(page)} title={'Home'} icon={home} iconWidth={22} pageRef={' '}/>
                        <NavButtonHeader page={page} setPage={(page) => setPage(page)} title={'Favourites'} icon={heart} iconWidth={25} pageRef={'favourites'}/>
                        <NavButtonHeader page={page} setPage={(page) => setPage(page)} title={'Cart'} icon={cart} iconWidth={25} pageRef={'cart'}/>

                        {isAuth ?
                            <NavButtonHeader page={page} setPage={(page) => setPage(page)} title={'Profile'} icon={profile} iconWidth={17} pageRef={'profile'}/>
                            :
                            <NavButtonHeader page={page} setPage={(page) => setPage(page)} title={'Login'} icon={loginIcon} iconWidth={23} pageRef={'auth/login'}/>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}
