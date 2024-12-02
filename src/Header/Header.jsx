import Button from "./Button/Button.jsx"

function Header() {

    return (
        <header>
            <nav>
                <ul>
                    <Button name="PREMIUM"/>
                    <Button name="PROFILE"/>
                    <li><a href="#"></a>Exercise</li>
                    <li><a href="#"></a>Nutrition</li>
                    <li><a href="#"></a>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
