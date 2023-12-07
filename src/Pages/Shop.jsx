import React from "react";
import Hero from "../Components/hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <NewCollections/>
        </div>
    )
}

export default Shop