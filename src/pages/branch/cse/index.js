import Branch_template from "../Branch_template";
import Assignment from "./assignment";
import Notes from "./notes";

export default function cse(){
    return(
        <>
            <Branch_template Branch_Name="Computer Science and Engineering" Notes={"./cse/notes"} /> 
            {/* Ye component actual me jaha hae, us jagah se path dena hae ex- ./cse/notes */}
        </>
    )
}