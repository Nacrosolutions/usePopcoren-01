import Input from "./Input";
import Logo from "./Logo";
import NumResult from "./NumResult";


export default function NavBar({children}) {

    return (
        <nav className="nav-bar">
      {children}
      </nav>
    )
}