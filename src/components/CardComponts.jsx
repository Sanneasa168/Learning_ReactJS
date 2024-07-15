import React from "react";
export default function ProductCard({ title, image, body, description }) {
  return (
    <section>
      <div className="relative max-w-lg overflow-hidden bg-cover bg-no-repeat shadow-md">
        <img src={image} class="max-w-lg" alt="Lourvre" />
        <div class="absolute bottom-0 text-center w-full overflow-hindden bg-white opacity-0 transition duration-500 ease-in-outhover:opacity-100">
          <h1 className="text-[16px] font-bold">{title}</h1>
          <p className="text-[14px] font-bold">{description}</p>
          <h1 className="text-[16px] text-center font-bold">{body}</h1>
        </div>
      </div>
    </section>
  );
}
