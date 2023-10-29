import Branch_index from "../Branch_index"
export default function me(){
    const Branch_Name = "Mechanical Engineering"
    const notes_page = "./me/notes"
    const syllabus_page = "./me/syllabus"
    const pyq_page = "./me/pyq"

return(
<>
    <Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
</>
)
}