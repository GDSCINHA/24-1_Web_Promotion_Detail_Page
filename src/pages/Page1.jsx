import './Page1.css';
import Header from "../components/Page1_Header/Header";
import Button from "../components/Page1_Button/Button";

function Page1(){
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    return(
        <div class="page1">
            <Header/>
            <div class="section">
                <div className="buttons">
                    <Button text="Study 펼쳐보기"/>
                    <Button text="Project 펼쳐보기"/>
                    <Button text="Seminar 펼쳐보기"/>
                </div>
            </div>
        </div>
    );
}

export default Page1;