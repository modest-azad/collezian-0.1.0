/* eslint-disable @next/next/no-img-element */
function services(){
    const cardStyle = "card hover:shadow-xl m-4 rounded-3xl text-center p-6 border border-gray-200 "
    const imgStyle = "p-6"
    return (
        <>
            <div className="services container">
                <h1 className="text-center text-4xl font-bold">Contents</h1>

                <div className="card-container my-10 grid grid-cols-4 max-sm:grid-cols-1 gap-4 ">
                    <div className={`"${cardStyle}"`}>
                        <img className={`${imgStyle}`} src="/images/readingBook.png" alt="image"/>
                        <h1 className="text-xl font-bold text-gray-900">Handwritten Notes</h1>
                        <p className="text-gray-800 py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, architecto.</p>
                    </div>
                    <div className={`"${cardStyle}"`}>
                        <img className={`${imgStyle}`} src="/images/man-reading-book.png" alt="image"/>
                        <h1 className="text-xl font-bold text-gray-900">Prev. Questions</h1>
                        <p className="text-gray-800 py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, architecto.</p>
                    </div>
                    <div className={`"${cardStyle}"`}>
                        <img className={`${imgStyle}`} src="/images/happy-graduation.png" alt="image"/>
                        <h1 className="text-xl font-bold text-gray-900">Jobs</h1>
                        <p className="text-gray-800 py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, architecto.</p>
                    </div>
                    <div className={`"${cardStyle}"`}>
                        <img className={`${imgStyle}`} src="/images/education.png" alt="image"/>
                        <h1 className="text-xl font-bold text-gray-900">Career Blogs</h1>
                        <p className="text-gray-800 py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, architecto.</p>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}
export default services;