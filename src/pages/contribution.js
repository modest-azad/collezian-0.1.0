/* eslint-disable @next/next/no-img-element */

export default function Contribute(){
    var input = " rounded-xl w-full text-sm p-4 my-1 bg-zinc-100"
    return (
        <>
                <div className="max-w-[1360px] text-center m-auto h-full grid grid-cols-1 lg:grid-cols-12  justify-center">
                    <div className="bg-zinc-950 md:col-span-6 flex justify-center items-center">
                        <img className="w-[40%] " src="/logo/Light_symbol_logo.png" alt="logo"/>
                    </div>
                    <div className="form-container md:col-span-6 w-full">
                        <h2 className="text-center font-bold text-2xl my-4 text-zinc-800">Upload Files</h2> 

                        <form className="grid gap-2 justify-center">
                        <hr/>
                        <p className="text-zinc-700 text-sm font-semibold text-left px-4 ">Your email<span className="text-red-400">*</span></p>
                        <input className={input} type="email" required name="email" id="tittle" placeholder="example@gmail.com"/>

                        <input className={input} name="link" type="text" placeholder="Paste link here or Choose File"/>
                        <input className={input} name="pdf" type="file"/>
                      
                        <select className={input} required >
                            <option value="civil">Select branch</option>
                            <option value="civil">Civil Engineering</option>
                            <option value="cse">Computer Science and Engineering</option>
                            <option value="ece">Electronics and Communication Engineering</option>
                            <option value="ee">Electrical Engineering</option>
                            <option value="eee">Elecrical and Electronics Engineering</option>
                            <option value="me">Mechanical Engineering</option>
                        </select>

                        <p className="text-zinc-700 text-sm font-semibold pt-4">Add Tittle<span className="text-red-400">*</span></p>
                        <input className={input} type="text"  required name="tittle" id="tittle" placeholder="ex-DBMS, Digital Signal Notes"/>

                        <p className="text-zinc-700 text-sm font-semibold  pt-4 ">Add Description</p>
                        <textarea className="p-4 rounded-xl w-full text-sm min-h-30  bg-zinc-100" required type="text-area" name="description" id="description" placeholder="Add description" />

                        <button className="  ring-2 ring-blue-500 bg-blue-100 text-[#0f0f0f] font-bold mx-10 my-4 py-4 px-4 rounded-3xl">Upload</button>
                        </form>
                    </div>
                    
                </div>
        </>
    )
}