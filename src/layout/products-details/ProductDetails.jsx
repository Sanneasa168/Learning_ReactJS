
import { useLocation } from "react-router-dom";
import { CardDetailComponents } from "../../components/CardDetailsComponents";

export function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  return (
      <section className="flex justify-center items-center  h-[90vh]">
         <CardDetailComponents
           image = {product.images[0]}
           name = {product.name}
         />
      </section>
  );
}
