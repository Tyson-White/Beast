import { useState } from "react";

// icons
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";
import profile from "../../assets/icons/profile.svg";
import loginIcon from "../../assets/icons/login.svg";
import home from "../../assets/icons/home.svg";

import { useAppSelector } from "../../store/hooks/hooks.ts";

// components
import SexSelect from "../Selects/SexSelect.tsx";
import NavButtonHeader from "./NavButton.header.tsx";
export default function Header() {
  const [page, setPage] = useState<string>("Home");
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const togglePage = (name: string): void => {
    setPage(name);
  };

  return (
    <div className="header h-[80px]">
      <div className="container h-[100%] max-w-[1100px] mx-auto">
        <div className="h-[100%] flex justify-between items-center">
          <div className="text-[44px] left-[47%] font-bold text-white">
            BEAST
          </div>
          <div className="flex justify-between text-white h-[40px] ">
            <NavButtonHeader
              page={page}
              setPage={(page) => setPage(page)}
              title={"Home"}
              icon={home}
              iconWidth={20}
              pageRef={" "}
            />
            <NavButtonHeader
              page={page}
              setPage={(page) => setPage(page)}
              title={"Favourites"}
              icon={heart}
              iconWidth={20}
              pageRef={"favourites"}
            />
            <NavButtonHeader
              page={page}
              setPage={(page) => setPage(page)}
              title={"Cart"}
              icon={cart}
              iconWidth={20}
              pageRef={"cart"}
            />

            {isAuth ? (
              <NavButtonHeader
                page={page}
                setPage={(page) => setPage(page)}
                title={"Profile"}
                icon={profile}
                iconWidth={16}
                pageRef={"profile"}
              />
            ) : (
              <NavButtonHeader
                page={page}
                setPage={(page) => setPage(page)}
                title={"Login"}
                icon={loginIcon}
                iconWidth={21}
                pageRef={"auth/login"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
