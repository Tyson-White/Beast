import {useState} from 'react';

import ordersIcon from '../assets/icons/orders.svg'
import purchasesIcon from '../assets/icons/purchases.svg'
import settingsIcon from '../assets/icons/settings_2.svg'
import SettingsProfile from "../components/Profile/Settings.profile.tsx";

type menuItem = {
    name: string,
    icon: string
}

const ProfilePage = () => {
    const profileMenu:menuItem[] = [{name: 'Settings', icon: settingsIcon}, {name: 'Orders', icon: ordersIcon}, {name: 'Purchases', icon: purchasesIcon}]
    const [profilePage, setProfilePage] = useState<string>('Settings')

    return (
        <div className="container max-w-[1100px] mx-auto">
            <div className="flex justify-between mt-[40px] h-[400px]">
                <div className="row-start-1 row-end-3 bg-[#393939] w-[200px] rounded-[2px] h-[100%]">
                    <div className="text-center flex items-center justify-between p-[10px] text-[20px] font-semibold text-white border-b-[1px] mb-[5px]">
                        <div className="font-semibold">Profile</div>
                        <svg width="20px" height="20px" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.74986 7.10714C7.43631 7.10714 8.80343 5.74001 8.80343 4.05357C8.80343 2.36713 7.43631 1 5.74986 1C4.06342 1 2.69629 2.36713 2.69629 4.05357C2.69629 5.74001 4.06342 7.10714 5.74986 7.10714Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 12.2449C1 10.5317 2.38883 9.14286 4.10204 9.14286H7.39798C9.11117 9.14286 10.5 10.5317 10.5 12.2449C10.5 13.5298 9.45839 14.5714 8.17345 14.5714H3.32653C2.04162 14.5714 1 13.5298 1 12.2449Z" stroke="white"/>
                        </svg>
                    </div>
                    {profileMenu.map(item => (
                        <div onClick={() => {
                            setProfilePage(item.name)

                        }} className={`duration-200 text-center py-[12px] text-[20px] font-semibold rounded-[3px] text-white cursor-pointer 
                        ${profilePage === item.name && "shadow-md bg-[#434343]"} w-[95%] mx-auto text-[16px] font-medium items-center flex flex-col`}>
                            <img className="mb-[2px]" src={item.icon} width={15} alt=""/>
                            <div className="">{item.name}</div>

                        </div>
                    ))}
                </div>
                <div className="bg-[#393939] row-start-1 w-[80%] rounded-[2px] h-[100%]">
                    {profilePage === 'Settings' &&
                        <SettingsProfile/>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;