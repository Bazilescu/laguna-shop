import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Phone } from '../assets/icons/phone.svg'
import { ReactComponent as Mail } from '../assets/icons/mail.svg'
import { ReactComponent as GitHub } from '../assets/icons/github.svg'
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg'
import './Footer.css'

function Footer() {
    
    return (
        <footer>
            <div className="container-fluid container-min-max-width
                            d-flex flex-wrap justify-content-between">
                <div className='m-1'>
                    <h3 className="h5 my-2">Some useful links:</h3>
                    <p className="m-1">
                        <Link to='/about'>About</Link>
                    </p>
                    <p className="m-1">
                        <Link to='/terms-and-conditions'>Terms and conditions</Link>
                    </p>
                </div>
                <div className='m-1'>
                    <h3 className="h5 my-2">Contact:</h3>
                    <p className="m-1">
                        <a href="mailto:bazilescu.george@yahoo.com">
                            <Mail className="footer-icon"/>
                            <span className="mx-1">bazilescu.george@yahoo.com</span> 
                        </a>
                    </p>
                    <p className="m-1">
                        <Phone className="footer-icon"/>
                        <span className="mx-1">+40770229102</span>
                    </p>
                </div>
                <div className='m-1'>
                    <h3 className="h5 my-2">Find me:</h3>
                    <p className="m-1">
                        <a href="https://github.com/Bazilescu"  target="_blank" rel='noreferrer'>
                            <GitHub className="footer-icon"/>
                            <span className="mx-1">Bazilescu</span>
                        </a>
                    </p>
                    <p className="m-1">
                        <a href="https://ro.linkedin.com/in/bazilescu-george-42b645178" target="_blank" rel='noreferrer'>
                            <LinkedIn className="footer-icon mb-1"/>
                            <span className="mx-1">bazilescu george</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-1">
                &copy; Bazilescu George, 2023
            </div>
        </footer>
    )
}

export default Footer
