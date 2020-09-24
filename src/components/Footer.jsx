import React from "react";

const year = new Date();
const currentYear = year.getFullYear();

function Footer(){
   return (
   <footer>
   <p>Copyright {currentYear}</p>
   </footer>)
}

export default Footer