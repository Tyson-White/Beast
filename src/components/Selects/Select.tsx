import {FC,  useEffect, useRef, useState} from 'react';
import {ISelect} from "../../models/models.ts";
import arrowSVG from "../../assets/icons/arrow.svg";

const Select:FC<ISelect> = (props) => {

    const selectRef = useRef<HTMLDivElement | null>(null)
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [selectedVariant, setSelectedVariant] =
        useState<string>("All")

    useEffect(() => {
        setSelectedVariant("All")

    }, [props.dependence]);


    return (
        <div onMouseLeave={() => setIsOpened(false)} ref={selectRef} className=" px-[10px] flex items-center hover:cursor-pointer ease-in duration-100 hover:bg-[#5b5b5b]"
             onMouseEnter={() => setIsOpened(!isOpened)}

        >
            <div className="flex transitiion-all items-center justify-center w-[107px] h-[38px] rounded-[4px]
            selected mx-auto text-amber-50 text-[20px] font-bold">{selectedVariant}</div>
            <div className={`ml-0 ${isOpened && '-rotate-180'} ease-in duration-100 rounded-[5px] p-[10px]`}>
                <img className="" width={15} src={arrowSVG} alt=""/>
            </div>
            <div  className={`${isOpened ? "h-260px w-[100%] py-2" : "h-[0px] overflow-hidden"} shadow-md absolute bg-white left-0 top-[60px] z-10 flex flex-col 
            justify-start
            `}>
                {["All", ...props.list].map(item => (
                    <div onClick={() => {
                        setSelectedVariant(item);
                        props.onChangeValue && props.onChangeValue(item)
                        setIsOpened(false)
                    }} className={`${selectedVariant === item &&
                    "bg-[#282828] text-white"}
                     rounded-[2px] text-[20px] px-[20px] font-bold mb-[10px] py-[5px] last:my-0 ${selectedVariant !== item && 'hover:bg-[#6665]'}`}>
                        {item}
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Select;