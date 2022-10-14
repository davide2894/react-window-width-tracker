import "./WindowWidthTracker.scss";
import {useEffect, useState} from "react";

function WindowWidthTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log({windowWidth});

    useEffect(() => {
       window.addEventListener("resize", function() {
           setWindowWidth(window.innerWidth);
       }); 
    }, [])

    return (
        <h1 className="tracker">
            Window width: {windowWidth}
        </h1>
    )
}

export default WindowWidthTracker;