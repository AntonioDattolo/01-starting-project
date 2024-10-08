import logo from '../assets/investment-calculator-logo.png'

export default function Header(){
    return(
        <header id="header">
            <div>
                <h1>React Investment Calculator</h1>
                <img src={logo} alt="logo-app-investment" />
            </div>
        </header>
    );
}