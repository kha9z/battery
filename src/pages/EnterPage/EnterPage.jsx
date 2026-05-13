import './EnterPage.css'
import logo from "../../assets/LogoMain.png"

import { useNavigate } from "react-router-dom"


export default function EnterPage() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <img src={logo} 
             alt="Logo" 
             className="logo" />

             <div className="EnterButtons">
              <button onClick={() => navigate("/productpage")}>
                Enter
              </button>

              <button>Admin login</button>
            </div>
        </div>
        
    )
}