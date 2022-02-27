import React from "react";

function footer(){
    var date= new Date();
    var year= date.getFullYear();
    return <footer>
             <p>Developed by Shristi Agarwal</p>
             <p>Copyright {year}</p></footer>;
}
export default footer;