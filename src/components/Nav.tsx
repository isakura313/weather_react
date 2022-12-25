import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Main</Link>
                </li>
                <li>
                    <Link to={`saved`}>Saved City</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav