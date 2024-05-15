import './Button.css';
import arrow from "../../assets/img/right_arrow.png";

const Button = (props) => {
    return(
        <div class="page1_button">
            {props.text} <img class="page1_arrow" src={arrow} alt="arrow" />
        </div>
    );
}

export default Button;