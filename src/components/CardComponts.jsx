
import React from "react";
export default  function ProductCard ({name,id}){

    return(
        <section  >
            <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat shadow-md">
                <img
                src="https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg"
                class="max-w-lg"
                alt="Lourvre"
                />
                <div class="absolute bottom-0 text-center w-full overflow-hindden bg-white opacity-0 transition duration-500 ease-in-outhover:opacity-100">
                    <h1 className="text-[16px] font-bold">
                    {name} 
                    </h1>
                    <p className="text-[14px] font-bold">
                      {id}
                    </p>
                     <h1 className="text-[16px] text-center font-bold">
                         This description
                     </h1>
                </div>
            </div>
        </section>
    );
}