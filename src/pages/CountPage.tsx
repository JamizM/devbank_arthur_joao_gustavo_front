
import Button from "../components/Button";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import '../styles/CountPage.css';

export default function CountPage() { 
    return(
        <>
            <h1>veio para pagina de conta</h1>
            <Link to="/" >Pagina Principal</Link>
        </>
    );
}