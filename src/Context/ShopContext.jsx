import React, { createContext} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext= creatContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {all_product};

    return(
        <ShopContextProvider value={contextValue}>
        
        </ShopContextProvider>
    )
}