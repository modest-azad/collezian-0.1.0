import { Alert, Button, Radio } from "flowbite-react";

export default function Contribute(){
    return (
        <>
                <div className=" m-auto grid  justify-center p-[10%] md:p-[10%]">
                    <form className="grid gap-4 w-full">
                        <input className=" bg-blue-100 mb-9 " type="file"/>
                                                
                        <select required className="">
                            <option value="civil">Civil Engineering</option>
                            <option value="cse">Computer Science and Engineering</option>
                            <option value="ece">Electronics and Communication Engineering</option>
                            <option value="ee">Electrical Engineering</option>
                            <option value="eee">Elecrical and Electronics Engineering</option>
                            <option value="me">Mechanical Engineering</option>
                            <option value="bca">BCA</option>
                        </select>

                        <p>Add Tittle</p>
                        <input type="text" required name="tittle" id="tittlee" />

                        <p>Add Description</p>
                        <textarea className="h-40" required type="text-area" name="description" id="description" />

                        <button onClick={()=>{
                            window.alert("Your file will be visible on site after verification.\n\n -Collezian Community")
                        }} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Upload</button>
                    </form>
                </div>
        </>
    )
}