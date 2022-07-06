import React from 'react'
import "./Navbar.css"
import DraftsIcon from '@mui/icons-material/Drafts';

const Navbar = () => {
    return (
        <>
            <div className="navBody">
                <div className="nav-left">
                    <div>
                        <button type="button" className="btn bold-font">
                            <DraftsIcon className="icon-color" /> Estatery
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn">Rent</button>
                    </div>
                    <div>
                        <button type="button" className="btn">Buy</button>

                    </div>
                    <div>
                        <button type="button" className="btn">Sell</button>

                    </div>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Manage Property
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Resources
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className="nav-right">
                    <button type="button" className="btn br-cl">Login</button>
                    <button type="button" className="btn button-col">Signup</button>

                </div>
            </div>
            <div className="nav-line">

            </div>
        </>

    )
}

export default Navbar