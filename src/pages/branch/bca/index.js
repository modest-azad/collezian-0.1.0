import Branch_index from "../Branch_index";


export default function bca(){
    const Branch_Name = "Bachlor in Computer Application"
    const notes_page = "./bca/notes"
    const syllabus_page = "./bca/syllabus"
    const pyq_page = "./bca/pyq"

return(
<>
<Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
</>
)
}