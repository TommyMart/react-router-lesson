import { NavLink } from "react-router-dom";


export function Navbar(props){

    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }


    return(
        <nav>
            <ul>
                <li>
                    {/* if active, apply activeNavStyle css */}
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    About</NavLink>
                </li>
                <li>
                    <NavLink to="/about/contact" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}