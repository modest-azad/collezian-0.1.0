export default function Notes(props){
    return (
        <>
        
      <div className="w-screen m-auto flex flex-col items-center">
        <div>
          <h2 className="headline text-center font-bold text-2xl p-8">
            {props.name}
          </h2>
        </div>

        <div className="search-filter-bar">
          {/* search box  */}
          <input
            type="text"
            className="
        search-box rounded-3xl w-40 transition-w delay-0 duration-700 ease-in-out hover:w-80 text-sm text-center "
            placeholder="Search Your Notes"
          />
        </div>
        {/* filter ----- Bar  */}
        <div className="mt-4 sticky top-20 rounded-3xl acrylic  shadow">
          <div className="filter-bar flex flex-rows p-1">
            <div className="All px-4 py-1 text-gray-700 light:text-white rounded-3xl transition-all duration-200 ease-in-out   bg-blue-200 hover:bg-blue-200">
              All
            </div>
            <div className="B Tech px-4 py-1 text-gray-700 light:text-white rounded-3xl transition-all duration-200 ease-in-out  hover:bg-blue-200">
              B.Tech
            </div>
            <div className="BCA px-4 py-1 text-gray-700 light:text-white rounded-3xl transition-all duration-200 ease-in-out  hover:bg-blue-200">
              BCA
            </div>
            <div className="Polytechnic px-4 py-1 text-gray-700 light:text-white rounded-3xl  transition-all duration-200 ease-in-out hover:bg-blue-200">
              Polytechnic
            </div>
          </div>
        </div>

        {/* contents  */}
        <div className="contents ">
          <h1 className="p-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            corporis et. Minima error reiciendis dolores? Similique, vel quidem
            ad reiciendis fuga labore. Repellat quisquam, nostrum accusantium
            voluptatibus perferendis repudiandae sed? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni quis minima voluptatem rerum
            laudantium explicabo sed quisquam? Eos, dicta reprehenderit
            eligendi, similique soluta officiis accusamus voluptatum inventore
            culpa voluptatem quaerat incidunt sapiente explicabo illo totam?
            Suscipit maxime explicabo aut corrupti odio obcaecati voluptates ea
            cumque ullam temporibus, consequatur nihil id veritatis quod
            consequuntur quaerat. Quidem fugiat optio ipsa aliquid consectetur
            obcaecati natus, recusandae pariatur error aut vitae placeat ab.
            Laborum vero quas quos reprehenderit velit molestias unde porro
            officiis at ducimus praesentium, facilis autem molestiae? Totam
            quaerat harum aliquid officiis ad delectus, modi cupiditate cumque
            maiores facere eos aspernatur pariatur nostrum quos fugiat repellat
            similique fugit repellendus voluptate hic quidem id. At ex numquam
            alias suscipit doloremque autem possimus id sint, ab, facilis ullam
            quam, explicabo voluptatum vel mollitia reprehenderit facere? Quas
            dolorem eveniet quis mollitia ea delectus autem veritatis quaerat.
            Eaque quo maxime consectetur saepe delectus totam quam dolore? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Non accusamus
            iure dolorum porro voluptate ullam incidunt facere, vero cumque
            exercitationem corrupti, excepturi odio officia reiciendis. Ab quia
            magnam fugiat pariatur dolorum! Fugiat expedita fuga facere ea
            ducimus? Omnis, error unde, quibusdam sint dolore ratione qui eaque
            consequuntur reiciendis optio vero, nesciunt adipisci iure maxime
            quisquam accusamus! Quos, modi sequi, accusamus culpa ducimus
            accusantium amet sit nostrum ea nihil, repellat ullam tempora quae
            in delectus sunt. Qui dolore nulla maxime vel, ea asperiores ullam
            laborum sequi perferendis mollitia similique, delectus tempore iste?
            Exercitationem minima facilis sed perspiciatis rerum tempora quos
            dolor, excepturi magnam, accusamus voluptatum. Rem qui nisi facilis
            ullam dolor, animi dolorum ipsa ipsam inventore deleniti possimus
            nostrum facere itaque, alias at rerum nesciunt perferendis quas
            deserunt voluptate corporis quis impedit laboriosam. Accusantium
            quasi cupiditate dicta ut velit! Laudantium, ad et modi quaerat
            reprehenderit veniam facilis sint illo nulla voluptas explicabo
            labore temporibus obcaecati consectetur pariatur deleniti?
            Necessitatibus facilis, eos recusandae fuga nulla reiciendis soluta
            rerum quaerat illum. Ipsum, explicabo sit vitae dolores laudantium
            fugit commodi impedit cum corrupti, doloremque rerum accusantium
            magni assumenda quibusdam veritatis soluta ipsam sint odio, aut
            earum fugiat eius cumque quasi. Quis quo sequi quibusdam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            corporis et. Minima error reiciendis dolores? Similique, vel quidem
            ad reiciendis fuga labore. Repellat quisquam, nostrum accusantium
            voluptatibus perferendis repudiandae sed? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni quis minima voluptatem rerum
            laudantium explicabo sed quisquam? Eos, dicta reprehenderit
            eligendi, similique soluta officiis accusamus voluptatum inventore
            culpa voluptatem quaerat incidunt sapiente explicabo illo totam?
            Suscipit maxime explicabo aut corrupti odio obcaecati voluptates ea
            cumque ullam temporibus, consequatur nihil id veritatis quod
            consequuntur quaerat. Quidem fugiat optio ipsa aliquid consectetur
            obcaecati natus, recusandae pariatur error aut vitae placeat ab.
            Laborum vero quas quos reprehenderit velit molestias unde porro
            officiis at ducimus praesentium, facilis autem molestiae? Totam
            quaerat harum aliquid officiis ad delectus, modi cupiditate cumque
            maiores facere eos aspernatur pariatur nostrum quos fugiat repellat
            similique fugit repellendus voluptate hic quidem id. At ex numquam
            alias suscipit doloremque autem possimus id sint, ab, facilis ullam
            quam, explicabo voluptatum vel mollitia reprehenderit facere? Quas
            dolorem eveniet quis mollitia ea delectus autem veritatis quaerat.
            Eaque quo maxime consectetur saepe delectus totam quam dolore? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Non accusamus
            iure dolorum porro voluptate ullam incidunt facere, vero cumque
            exercitationem corrupti, excepturi odio officia reiciendis. Ab quia
            magnam fugiat pariatur dolorum! Fugiat expedita fuga facere ea
            ducimus? Omnis, error unde, quibusdam sint dolore ratione qui eaque
            consequuntur reiciendis optio vero, nesciunt adipisci iure maxime
            quisquam accusamus! Quos, modi sequi, accusamus culpa ducimus
            accusantium amet sit nostrum ea nihil, repellat ullam tempora quae
            in delectus sunt. Qui dolore nulla maxime vel, ea asperiores ullam
            laborum sequi perferendis mollitia similique, delectus tempore iste?
            Exercitationem minima facilis sed perspiciatis rerum tempora quos
            dolor, excepturi magnam, accusamus voluptatum. Rem qui nisi facilis
            ullam dolor, animi dolorum ipsa ipsam inventore deleniti possimus
            nostrum facere itaque, alias at rerum nesciunt perferendis quas
            deserunt voluptate corporis quis impedit laboriosam. Accusantium
            quasi cupiditate dicta ut velit! Laudantium, ad et modi quaerat
            reprehenderit veniam facilis sint illo nulla voluptas explicabo
            labore temporibus obcaecati consectetur pariatur deleniti?
            Necessitatibus facilis, eos recusandae fuga nulla reiciendis soluta
            rerum quaerat illum. Ipsum, explicabo sit vitae dolores laudantium
            fugit commodi impedit cum corrupti, doloremque rerum accusantium
            magni assumenda quibusdam veritatis soluta ipsam sint odio, aut
            earum fugiat eius cumque quasi. Quis quo sequi quibusdam.
          </h1>
        </div>
      </div>
    
        </>
    )
}