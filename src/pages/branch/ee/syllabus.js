import Branch_syllabus from "../Branch_syllabus";
import {ee} from"../../../Backend/syllabus_api";

export default function syllabus(){
    const heading = "Electrical Engineering Syllabus"

    return (
        <>
            <Branch_syllabus heading={heading} data={ee}/>
        </>
    )
}