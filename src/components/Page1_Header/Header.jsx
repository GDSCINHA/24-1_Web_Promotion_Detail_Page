import './Header.css';
import logo from '../../assets/img/keyboards.png';

function Header(){
    return(
        <header class="page1_header">
            <img class="page1_img" src={logo} alt="page1_img" />
            <div class="page1_title">
                GDSC INHA 챕터,<br />
                한 장씩 펼쳐보실래요?
            </div>
        </header>
    );
}

export default Header;