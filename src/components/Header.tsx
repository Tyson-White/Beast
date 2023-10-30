import {useState} from "react";
import SexSelect from "./SexSelect.tsx";

// icons
import heart from "../assets/icons/heart.svg"
import cart from "../assets/icons/cart.svg"
import profile from "../assets/icons/profile.svg"
import {useNavigate} from "react-router-dom";
export default function Header() {
    const [page, setPage] = useState<string>('')
    const navigate = useNavigate()
    const togglePage = (name: string):void => {
        setPage(name)
        navigate(name)
    }
  return (
    <div className="header h-[116px]">
      <div className="container h-[100%] max-w-[1100px] mx-auto">
          <div className="h-[100%] flex justify-between items-center">
            <SexSelect/>
              <div className="text-[64px] font-bold text-white cursor-pointer" onClick={() => togglePage('/')}>BEAST</div>
            <div className="flex justify-between text-white w-[210px] ">
                <div className="flex flex-col items-center justify-between cursor-pointer" onClick={() => togglePage('favourites')}>
                    <img width={25} src={heart} alt=""/>
                    <p className={page === 'favourites' ? 'text-amber-600' : 'text-white'}>Favourites</p>
                </div>
                <div className="flex flex-col items-center justify-between cursor-pointer relative" onClick={() => togglePage('cart')}>
                    <div className="absolute w-[15px] h-[15px] bg-amber-50 rounded-[50%] top-[-5px] right-[-5px]
                        flex justify-center  text-black
                    ">
                        <div className="-translate-y-0.5">3</div>

                    </div>
                    <img width={25} src={cart} alt=""/>
                    <p className={page === 'cart' ? 'text-amber-600' : 'text-white'} >Cart</p>
                </div>
                <div className="flex flex-col items-center justify-between cursor-pointer" onClick={() => togglePage('/auth/login')}>
                    <img width={20} src={profile} alt=""/>
                    <p className={page === 'profile' ? 'text-amber-600' : 'text-white'} >Profile</p>
                </div>
            </div>
          </div>

      </div>
    </div>
  );
}
