import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="se-pre-con" id="loader"></div>
    )
}

export default Preloader;