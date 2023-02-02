import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../styles/Header.scss';


function Header() {
    const [time, setTime] = useState()

    useEffect(() => {
        setTimeout(() => {
            setTime(moment().format('MMMM Do YYYY, HH:mm'));
        }, 1000);
    });

    return (
        <div className="HeaderBox">
            <div className="Logo">
                WorkSpace
            </div>
            <div className="HeaderTime">
                {time}
            </div>
    </div>
    );
}

export default Header;
