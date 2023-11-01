import {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks.ts";
import {logout} from "../store/slices/authSlice.ts";
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {
    const profileMenu:string[] = ['Orders', 'Settings', 'Purchases']
    const [profilePage, setProfilePage] = useState<string>('Orders')
    const user = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div className="container max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[200px] gap-[50px] w-[100%] mt-[40px]">
                <div className="row-start-1 row-end-3 bg-[#282828] w-[200px] rounded-[2px]">
                    <div className="text-center py-[10px] text-[20px] font-semibold text-white border-b-[1px] mb-[20px]">Profile</div>
                    {profileMenu.map(item => (
                        <div onClick={() => setProfilePage(item)} className={`text-center py-[6px] text-[20px] font-semibold text-white cursor-pointer 
                        ${profilePage === item && "bg-[#DFDFDF] text-[#272727]"}`}>{item}</div>
                    ))}
                </div>
                <div className="h-[40px] bg-[#282828] row-start-1 w-[100%] rounded-[2px]"></div>
            </div>
        </div>
    );
};

export default ProfilePage;