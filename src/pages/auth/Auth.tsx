import {} from 'react';

import background from '../../assets/img/auth-bg.svg'


const Auth = () => {

    return (
        <div className="bg-[#282828] font-bold text-white text-center">
            <img src={background} className="opacity-[0.5]" width={"100%"} alt=""/>
            <div className="absolute top-0 left-[40%] mt-[50px]">

                <button className="flex items-center bg-[#28282890] py-[13px] px-[30px] rounded-[4px] mx-auto hover:bg-[#282828] duration-150">
                    <svg width="35" height="35" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.5623 29.8677C24.9259 30.9777 22.8387 31.6504 20.3674 31.6504C15.5919 31.6504 11.5344 28.4045 10.0817 24.0317V24.015C9.71437 22.905 9.49729 21.7277 9.49729 20.5C9.49729 19.2722 9.71437 18.095 10.0817 16.9849C11.5344 12.6122 15.5919 9.36629 20.3674 9.36629C23.0725 9.36629 25.4769 10.3081 27.3971 12.1245L32.6568 6.82679C29.4676 3.83314 25.3265 2 20.3673 2C13.1874 2 6.99259 6.15408 3.97035 12.2087C2.71804 14.6977 2 17.5064 2 20.5C2 23.4937 2.71804 26.3023 3.97035 28.7914V28.8082C6.99259 34.8459 13.1874 39 20.3673 39C25.3265 39 29.4842 37.3518 32.5232 34.5263C35.9963 31.2973 38 26.5545 38 20.9204C38 19.6086 37.8831 18.3472 37.6661 17.1363H20.3673V24.3009H30.2523C29.8182 26.605 28.5159 28.5559 26.5623 29.8677Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className="ml-[20px]">LOGIN WITH GOOGLE</span>
                </button>
                <p className="mt-[20px] text-[28px]">OR</p>

            </div>
        </div>
    );
};

export default Auth;