/* eslint-disable @next/next/no-img-element */
function services() {
  return (
    <>
      <div className="service p-[5%] md:p[40%] ">
        {/* feature - 1  */}
        <div className="feature grid max-sm:grid-rows-2 md:grid-cols-5 items-center">
          <div className="feature-image md:col-span-2 ">
            <img src="/images/man-reading-book.svg" alt="readingBook" />
          </div>

          <div className="feature-content max-sm:text-center md:p-8 md:col-span-3 ">
            <h2 className="font-bold  text-2xl">Grow with AI</h2>
            <p className="py-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est ea veritatis sed reiciendis nostrum quam vitae velit
              recusandae? Culpa incidunt aut error a earum iusto commodi, modi
              architecto? Quidem minus, quos corrupti sint est exercitationem.
              Dolor, recusandae ipsum consequatur in, expedita ipsa dolorum
              exercitationem fugit, voluptas tempore doloribus iste!
            </p>
          </div>
        </div>

        {/* feature - 2 */}
        <div className="feature grid max-sm:grid-rows-2 md:grid-cols-5 items-center">
          <div className="feature-image md:col-span-2 ">
            <img src="/images/education.png" alt="Study_Materials" />
          </div>
          <div className="feature-content max-sm:text-center text-right md:p-8 md:col-span-3 ">
            <h2 className="font-bold text-2xl">Free Engineering Materials</h2>
            <p className="py-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est ea veritatis sed reiciendis nostrum quam vitae velit
              recusandae? Culpa incidunt aut error a earum iusto commodi, modi
              architecto? Quidem minus, quos corrupti sint est exercitationem.
              Dolor, recusandae ipsum consequatur in, expedita ipsa dolorum
              exercitationem fugit, voluptas tempore doloribus iste!
            </p>
          </div>
        </div>

        {/* feature - 3  */}
        <div className="feature grid max-sm:grid-rows-2 md:grid-cols-5 items-center">
          <div className="feature-image md:col-span-2 ">
            <img src="/images/happy-graduation.svg" alt="career" />
          </div>

          <div className="feature-content max-sm:text-center md:p-8 md:col-span-3 ">
            <h2 className="font-bold  text-2xl">Job Updates</h2>
            <p className="py-4 text-gray-600">
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
