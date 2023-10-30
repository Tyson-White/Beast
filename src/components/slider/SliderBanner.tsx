import {IBanner} from "../../models/models.ts";
import {FC} from "react";


const SliderBanner:FC<IBanner> = (props)  => {

    return (
        <div className="min-w-[100%] h-[320px] relative">
            <img className="-z-1" width={"100%"}  src={props.img} alt=""/>
            <div className="absolute text-white z-1 top-0 left-[17.4%]">
                <div className="text-[128px] font-bold">{props.title}</div>
                <div className="text-[32px] font-bold -my-10 mx-1">{props.subtitle}</div>

            </div>

        </div>
    );
};

export default SliderBanner;