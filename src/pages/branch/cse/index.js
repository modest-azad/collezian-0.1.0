import Branch_index from "../Branch_index";
import Assignment from "./assignment";
import Notes from "./notes";

export default function cse(){
    return(
        <>
            <Branch_index Branch_Name="Computer Science and Engineering" Notes={"./cse/notes"} /> 
            {/* Ye component actual me jaha hae, us jagah se path dena hae ex- ./cse/notes */}
        </>
    )
}