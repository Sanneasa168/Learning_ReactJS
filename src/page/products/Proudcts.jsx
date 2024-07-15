import { Button } from "flowbite-react";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
const [openModal, setOpenModal] = useState(false);
export default function Products() {
  const [productDetail, setProductDetail] = useState([]);

  const [products, setProduct] = useState([
    // Fatch product
    useEffect(() => {
      fetch(`${BASt_URL}contents/all_content/`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data", data);
          setProduct(data.products);
        });
    }, []),
  ]);

  // Handle Views produts
  const handleProductDetail = (product) => {
    setProductDetail(product);
    setOpenModal(true);
  };
  const handleDeleteProduct = (id) =>{
    products.map((product)=>{
        const newProduct = products.filter((product)=>product.id !==id);
        setProduct(newProduct); 
    })
  }

  // Table Column
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Body",
      selector: (row) => row.body,
      sortable: true,
    },
    {
      name: "Images",
      selector: (row) => (
        <div>
          <img src={row.thumbnail} alt={row.title} width={"70"} height={"70"} />
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <Button  onClick={()=>handleDeleteProduct(id)} className=" bg-red-700">
            <FaDeleteLeft />
            Deleted
          </Button>
          <Button
            onClick={() => handleProductDetail(row)}
            className="mr-2 bg-blue-700"
          >
            <FaEyeSlash />
            View
          </Button>
        </div>
      ),
    },
  ];
  return (
    <section>
      <DataTable
        className="none-scrollbar"
        columns={columns}
        data={products}
        fixedHeader
        pagination
        pointerOnhover
        striped
      />
      {/* View of Model */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="w-40 h-40 object-cover rounded-lg">
            <img src={productDetail.thumbnail || "hhttps://media.istockphoto.com/ id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}  alt="" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <h2></h2>
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
// const scrollbar  ={
//     .none-scrollabr::-webkit-scrollbar{
//         dispay:none
//     }
// }
