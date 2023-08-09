import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faUser,faCode,faLaptopCode,faMessage} from "@fortawesome/free-solid-svg-icons";
import "./Nav.scss"
const Nav = () => {
  return (
    <nav>
        <ul>
            <li><a href='#'><FontAwesomeIcon icon={faHouse} /></a></li>
            <li><a href='#about'><FontAwesomeIcon icon={faUser} /></a></li>
            <li><a href='#skills'><FontAwesomeIcon icon={faCode} /></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faLaptopCode} /></a></li>
            <li><a href='#'><FontAwesomeIcon icon={faMessage} /></a></li>
        </ul>
    </nav>
  )
}

export default Nav