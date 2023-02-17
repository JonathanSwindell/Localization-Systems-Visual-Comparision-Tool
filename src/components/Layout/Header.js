import React, { useState, Fragment } from "react";
import classes from './Header.module.css';
import backgroundImage from '../../assets/background.jpg';
import HeaderCartButton from "./HeaderCartButton";
import HeaderInput from "./HeaderInput";
import Papa from "papaparse";
import { UserContext } from "../../store/cart-context"
 
// Allowed extensions for input file
const allowedExtensions = ["csv"];

const Header = (props) => {
        // This state will store the parsed data
    const [data, setData] = useState([]);
        
    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");
    
    // It will store the file uploaded by the user
    const [file, setFile] = useState("");

    
   // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        setError("");
         
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];
             
            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }
            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    
const handleParse = () => {
         
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
     
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;
        const columns = Object.keys(parsedData[0]);
        setData(parsedData);

        console.log(columns)
        console.log(parsedData)    
        console.log(csv?.data)
    };
    reader.readAsText(file);
};


    return <Fragment>
        <header className={classes.header}>
            <h1>Localization System Visualization Comparison Tool</h1>
            <HeaderCartButton onClick={handleParse} />
            <HeaderInput
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
                overflow="hidden"
            />
        </header>
        <div className={classes['main-image']}>
            <img src={backgroundImage} alt="Localization data"/>
        </div>
    </Fragment>
};

export default Header;