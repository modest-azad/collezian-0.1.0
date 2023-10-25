/* eslint-disable @next/next/no-img-element */
function services() {
  return (
    <>
      <div className="services container">
        <div className="feature grid grid-rows-2 gap-10 md:grid-cols-5">
          <div className="feature-image md:col-span-2 ">
            <img
              
              src="/images/man-reading-book.svg"
              alt="readingBook"
            />
          </div>

          <div className="feature-content max-sm:text-center  md:col-span-3 p-8">
            <h2 className="font-bold  text-2xl">Grow with AI</h2>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est ea veritatis sed reiciendis nostrum quam vitae velit
              recusandae? Culpa incidunt aut error a earum iusto commodi, modi
              architecto? Quidem minus, quos corrupti sint est exercitationem.
              Dolor, recusandae ipsum consequatur in, expedita ipsa dolorum
              exercitationem fugit, voluptas tempore doloribus iste!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default services;
