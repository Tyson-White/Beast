import {useEffect, useState} from 'react';

interface inputProps {
    label: string,
    getValue: (value:string) => void,
    type: string,
    acceptValue?: string,
    value: string
}

const AuthInput = (props:inputProps) => {

    const [isValid, setIsValid] = useState<boolean>(false)


    useEffect(() => {

            if (props.type === 'email') {
                const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                if (re.test(String(props.value).toLowerCase())) {
                    setIsValid(true)
                } else {
                    setIsValid(false)
                }
            }
            if (props.type === 'password') {
                if (props.acceptValue && props.acceptValue === props.value && props.value.length > 5) {
                    setIsValid(true)
                } else if (!props.acceptValue && props.value.length > 5){
                    setIsValid(true)
                } else {
                    setIsValid(false)
                }
            }




    }, [props.value])

    return (
        <div className={`flex flex-col text-start mt-[20px] py-[5px] `}>
            <label htmlFor="" className="text-[20px]">{props.label}</label>
            <input type={`${props.type === 'password' ? "password" : "text"}`} className={`bg-[#ffffff20] rounded-[4px] h-[61px] w-[440px] outline-none
                text-[24px] px-[20px]
                focus:bg-[#cdb58320]
                duration-150
               
                `}
                   placeholder={props.label}
                   onChange={(e) => {
                       props.getValue(e.target.value)

                   }}
                   value={props.value}
            />
            <div className={`h-[3px] w-[100%] mt-[5px] rounded-[10px] duration-300 ${!isValid ? "bg-[#cf3b3b]" : "bg-green-400"}`}></div>
        </div>
    );
};

export default AuthInput;