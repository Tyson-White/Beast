import {useEffect, useState} from 'react';

import {IProduct} from "../models/models.ts";
const ProductCard = (props: IProduct) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 100)
    }, [])
    return (
        <div className={`flex flex-col transition-all w-[233px] cursor-pointer scale-0 ${isVisible && "scale-100"}`}>
            <div className="h-[264px] w-[100%] rounded-[4px] overflow-hidden relative">
                <img className="h-[100%] w-[100%] object-cover" src={props.imgURL}  alt=""/>
            </div>
            <div className="text-[#282828] text-center font-bold text-[20px] mt-[10px]">
                {props.productName.toUpperCase()}
            </div>
            <div className="text-center mb-[10px] text-[#474747] ">
                {props.type} / {props.thingType}
            </div>
            <div className="flex justify-between">
                <button className="bg-[#282828] rounded-[4px] w-[150px] font-bold text-white text-[18px]">{props.productPrice} $</button>
                <button className="bg-[#393939] px-[20px] py-[10px] rounded-[4px] hover:bg-[#39393990] duration-200">
                    <svg width="25" height="25" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5073 25.2018C11.7887 25.2018 12.8275 26.2406 12.8275 27.522C12.8275 28.8034 11.7887 29.8422 10.5073 29.8422C9.22593 29.8422 8.18716 28.8034 8.18716 27.522C8.18716 26.2406 9.22593 25.2018 10.5073 25.2018Z" stroke="white" stroke-width="2"/>
                        <path d="M24.4284 25.202C25.7098 25.202 26.7486 26.2406 26.7486 27.5221C26.7486 28.8035 25.7098 29.8423 24.4284 29.8423C23.1471 29.8423 22.1082 28.8035 22.1082 27.5221C22.1082 26.2406 23.1471 25.202 24.4284 25.202Z" stroke="white" stroke-width="2"/>
                        <path d="M2 2L2.40404 2.14206C4.41732 2.84988 5.42397 3.2038 5.99975 4.04637C6.57552 4.88895 6.57552 6.00813 6.57552 8.24649V12.4563C6.57552 17.0063 6.67334 18.5078 8.01348 19.9214C9.35362 21.3349 11.5105 21.3349 15.8244 21.3349H17.4679M24.0269 21.3349C26.4414 21.3349 27.6487 21.3349 28.5021 20.6394C29.3554 19.944 29.5992 18.7616 30.0866 16.3967L30.8597 12.6462C31.3966 9.9562 31.6649 8.61124 30.9783 7.7186C30.2917 6.82598 27.9455 6.82598 25.3392 6.82598H15.9574M6.57552 6.82598H9.73394" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default ProductCard;