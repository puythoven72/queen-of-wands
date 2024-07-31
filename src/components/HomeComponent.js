
import SplashPage from "./SplashPage";
import '../App.css';

function HomeComponent(props) {
    return (
        <div>
            <SplashPage activeLink={props.activeLink} setActiveLink={props.setActiveLink}/>
        </div>
    );
}
export default HomeComponent;