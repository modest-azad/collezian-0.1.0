import Branch_index from "../Branch_index"
export default function eee(){
    const Branch_Name = "Electrical and Electronics Engineering"
    const notes_page = "./eee/notes"
    const syllabus_page = "./eee/syllabus"
    const pyq_page = "./eee/pyq"

return(
<>
    <Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
</>
)
}