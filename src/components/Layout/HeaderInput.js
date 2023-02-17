import { useContext, useEffect, useState } from "react";

import classes from "./HeaderInput.module.css";


const HeaderInput = (props) => {
    const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.input} ${btnIsHighLighted ? classes.bump : ''}`;


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

    return <input className={btnClasses} onChange={props.onChange}  
        id={props.csvInput}
        name={props.name}
        type={props.type}
        overflow={props.overflow}
    />
};

export default HeaderInput;