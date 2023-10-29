import Branch_index from "../Branch_index"
export default function ece(){
    const Branch_Name = "Electronics and Communication Engineering"
    const notes_page = "./ece/notes"
    const syllabus_page = "./ece/syllabus"
    const pyq_page = "./ece/pyq"

return(
<>
    <Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
</>
)
}