import React from "react";

const Button = ({ text } : { text : string}) => {
    return (
        <button className="btn text-white">{text}</button>
    )
}

export default Button