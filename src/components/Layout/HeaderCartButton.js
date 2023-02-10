import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;


    useEffect(() => {
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 250); //300ms is the length of the animation defined in the css file.

        //clear up function
        return () => {
            clearTimeout(timer);
        }
    }, [ ]);

    return <button className={btnClasses} onClick={props.onClick}>

        <span>Open CSV</span>
    </button>
};

export default HeaderCartButton;