import Branch_index from "../Branch_index";

export default function cse(){
    const Branch_Name = "Computer Science and Engineering"
    const notes_page = "./cse/notes"
    const syllabus_page = "./cse/syllabus"
    const pyq_page = "./cse/pyq"

return(
<>
    <Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
</>
)
}