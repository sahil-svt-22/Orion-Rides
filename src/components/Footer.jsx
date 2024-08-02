import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    let navigate = useNavigate()
    const contactBtnHandler = () => {
        navigate('/contact')
    }
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <Link to="/">OrionRides.</Link>
                    <button onClick={contactBtnHandler}>Got a Question? Contact Us<i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="footer-mid">
                    <div className="footer-mid-left">
                        <h3>Useful Links</h3>
                        <div className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/vehicles">Vehicles</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="footer-mid-right">
                        All Rights Reserved &copy; 2024
                    </div>
                </div>
                <div className="footer-bottom">
                    <h1>Crafted by <Link to="https://prateeksharma.xyz" target='_blank'>Sahil shrivastav</Link></h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer
