import React from 'react';
enum PrimaryButtonColor{
    default= 0,
    Green =1
}
type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> &{
    color: PrimaryButtonColor
}

const PrimaryLink:React.FC<Props> = ({children, ...props}) => {
    return (
        <a 
        href="#"
        className='text-sm font-medium text-primary hover:underline cursor-pointer'
        >
            {children}
        </a>
    );
};

export default PrimaryLink;