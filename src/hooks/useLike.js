import { useContext } from "react";
import LikeContext from "../contexts/LikeContext";

export default function useLike(){
    return useContext(LikeContext);
}