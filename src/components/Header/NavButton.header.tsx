import { INavButton } from "../../models/models.ts";
import { useNavigate } from "react-router-dom";

const NavButtonHeader = (props: INavButton) => {
  const navigate = useNavigate();
  const togglePage = () => {
    props.setPage(props.title);
    navigate("/" + props.pageRef);
  };

  return (
    <div
      className={`cursor-pointer text-center flex items-center
       mr-[10px] transition-[padding] duration-[150ms] last:m-0 
       ${
         props.page !== props.title &&
         "hover:pb-[5px] hover:border-b-[3px] hover:border-[#2f2f2f]"
       }
       
    px-[10px] rounded-[2px] h-40px`}
      onClick={() => togglePage()}
    >
      <img
        className={`duration-150 ${props.page === props.title && "opacity-0"}`}
        width={props.iconWidth}
        src={props.icon}
        alt=""
      />
      <div
        className={`ml-[10px] duration-300 ${
          props.page === props.title
            ? "text-amber-600 -translate-x-[15px] font-bold text-[20px]"
            : "text-white"
        } text-[15px]`}
      >
        {props.title}
      </div>
    </div>
  );
};

export default NavButtonHeader;
