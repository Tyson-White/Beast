
import {INavButton} from "../../models/models.ts";
import {useNavigate} from "react-router-dom";

const NavButtonHeader = (props:INavButton) => {
    const navigate = useNavigate()
    const togglePage = () => {
        props.setPage(props.title)
        navigate('/' + props.pageRef)
    }

    return (
        <div className="flex flex-col items-center justify-between cursor-pointer" onClick={() => togglePage()}>
            <img width={props.iconWidth} src={props.icon} alt=""/>
            <p className={`${props.page === props.title ? 'text-amber-600' : 'text-white'} text-[15px]`} >{props.title}</p>
        </div>
    );
};

export default NavButtonHeader;