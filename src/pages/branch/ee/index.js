import Branch_index from "../Branch_index"
export default function ee(){
            const Branch_Name = "Electrical Engineering"
            const notes_page = "./ee/notes"
            const syllabus_page = "./ee/syllabus"
            const pyq_page = "./ee/pyq"

    return(
        <>
            <Branch_index name={Branch_Name} notes={notes_page} syllabus={syllabus_page}  pyq={pyq_page}/>
        </>
    )
}