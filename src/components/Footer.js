import React from "react";

const Footer = () =>{
    const date = new Date()
    const cuuruntYear = date.getFullYear()
    console.log(cuuruntYear)
    return(
        <footer>
            <p>copyright @ {cuuruntYear}</p>
        </footer>
    )
}

export default Footer