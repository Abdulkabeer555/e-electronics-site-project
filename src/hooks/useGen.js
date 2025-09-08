import { useContext } from "react";
import {context} from "../context/GenContextProvider"

function useGen(){
    return useContext(context);
};

export default useGen;
