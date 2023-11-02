import { useEffect, useState } from "react";
import settingsIcon from "../../assets/icons/settings.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks.ts";
import { logout } from "../../store/slices/authSlice.ts";
import { useNavigate } from "react-router-dom";
const SettingsProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
  }, []);

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const user = useAppSelector((state) => state.auth.user);
  return (
    <div
      className={`py-[10px] px-[30px] duration-[50ms] opacity-0 ${
        isVisible && "opacity-[1.0]"
      }`}
    >
      <div className="flex items-center">
        <img width={35} className="mr-[10px]" src={settingsIcon} alt="" />
        <p className="text-white font-semibold text-[32px]">Settings</p>
      </div>
      <div className="mt-[10px]">
        <div className="text-white font-semibold text-[24px]">Information</div>
        <div className="">
          <div className="flex items-center">
            <div className="w-[246px] h-[54px] bg-[#434343] shadow-md rounded-[2px] flex flex-col justify-end">
              <p className="text-white px-[10px]">
                {user.email.slice(0, 3)}****
                {user.email.slice(user.email.indexOf("@") - 1)}
              </p>
              <div className="hover:bg-[#28282890] duration-200 cursor-pointer w-[100%] bg-[#282828] rounded-[0px_0px_2px_2px] text-white text-[13px] text-center">
                edit
              </div>
            </div>
            <span className="ml-[10px] text-white text-[20px]">Email</span>
          </div>
          <div className="flex items-center mt-[20px]">
            <div className="w-[246px] h-[54px] bg-[#434343] shadow-md rounded-[2px] flex flex-col justify-end">
              <p className="text-white px-[10px]">*******</p>
              <div className="hover:bg-[#28282890] duration-200 cursor-pointer w-[100%] bg-[#282828] rounded-[0px_0px_2px_2px] text-white text-[13px] text-center">
                edit
              </div>
            </div>
            <span className="ml-[10px] text-white text-[20px]">Password</span>
          </div>
          <div className="mt-[20px] text-white ">Actions</div>
          <button className="shadow-md rounded-[2px] pt-[8px] flex flex-col items-center w-[246px] bg-[#854A4A] hover:bg-[#854A4A90] duration-200">
            <img width={20} src={deleteIcon} alt="" />
            <p className="text-white  font-semibold text-[20px]">
              Delete account
            </p>
          </button>

          <div className="w-[100%] mt-[10px] flex justify-between items-center">
            <button
              onClick={() => onLogout()}
              className="px-[10px] rounded-[2px] hover:bg-[#43434390] duration-200 py-[5px] text-white font-semibold text-[20px] shadow-md bg-[#434343]"
            >
              Logout
            </button>
            <div className="text-white">User ID: {user.userId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
