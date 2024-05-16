import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './Button.css';
import arrow from "../../assets/img/right_arrow.png";

const Button = ({address, text}) => {
    // const navigate = useNavigate();

    const [buttonText, setButtonText] = useState(text);

    const handleClick = () => {
        // navigate(address);
        setButtonText(text);
    };
    
    return(
        <div class="page1_button"
            onClick={handleClick}
        >
            {buttonText} <img class="page1_arrow" src={arrow} alt="arrow" />
        </div>
    );
}

export default Button;