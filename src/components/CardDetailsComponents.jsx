
import { Card } from "flowbite-react";

export function CardDetailComponents({images,name}) {
  return (
    <Card
      className="max-w-sm"
      imgSrc={images || "No images"}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
         {name || "No Name+"}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      </div>
    </Card>
  );
}
