import React from "react";

const Header = () => {
    return(
        <header className="header d-flex justify-between align-center p-45">
            <div className="headerLeft d-flex align-center ga">
                <img width={40} height={40} src='/img/logo.png'/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Service</h3>
                    <p>Магазин кроссовок от Урала</p>
                </div>
            </div>

            <ul className="d-flex">
                <li className="mr-30">
                    <img className="mr-10" width={18} height={18} src='/img/cart.svg'/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src='/img/pref.svg'/>
                    <p></p>
                </li>
            </ul>
        </header>
    )
}

export default Header;