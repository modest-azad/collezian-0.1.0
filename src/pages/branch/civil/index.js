import Branch_index from "../Branch_index"
export default function civil(){
    const Branch_Name = "Civil Engineering"
    const notes_page = "./civil/notes"
    const syllabus_page = "./civil/syllabus"
    const pyq_page = "./civil/pyq"

return(
<>
<Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
</>
)
}