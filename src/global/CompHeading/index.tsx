import React from "react";
interface ComponentHeadingProps {
    heading: string;
    description?: string;
    className?: string;
}
const CompHeading: React.FC<ComponentHeadingProps> = ({
    heading,
    description,
    className,
}) => {
    return (
        <div className={`${className} text-black w-full md:w-[90%] relative z-40`}>
            <h1 className={`${className} text-2xl md:text-4xl py-4 text-black`}>
                {heading}
            </h1>
            <p className={`${className} text-gray1 pb-1`}>{description}</p>
        </div>
    );
};

export default CompHeading;
