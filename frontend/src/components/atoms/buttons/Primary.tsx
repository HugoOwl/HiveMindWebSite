import React from 'react';
import { twMerge } from 'tailwind-merge';
export enum PrimaryButtonColor{
    Primary= 0,
    Secondary=1
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    customColor :PrimaryButtonColor
}
const PrimaryButton:React.FC<Props> = ({
    children,
    customColor = PrimaryButtonColor.Primary, 
    ...props
}) => {
    let style ='bg-primary w-full text-white py-2 text-lg font-semibold rounded-md'
    if(customColor === PrimaryButtonColor.Secondary) style = twMerge(style,'bg-secondary')
    return (
        <button {...props} className={style}>
            {children}
        </button>
    )
};

export default PrimaryButton;