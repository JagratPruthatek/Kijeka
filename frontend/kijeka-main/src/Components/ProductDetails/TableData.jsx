import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
function TableData() {
  const products = [
    {
      model: "KEAWPS",
      item_name: "Arial Work Platform(Single Mast)",
      capacity: "130KG",
      image: img1,
      select: "",
    },
    {
      model: "KEAWPD",
      item_name: "Arial Work Platform(Double Mast)",
      capacity: "200KG",
      image: img2,
      select: "",
    },
    {
      model: "KEAWPD",
      item_name: "Arial Work Platform(Double Mast)",
      capacity: "200KG",
      image: img2,
      select: "",
    },
    {
      model: "KEAWPD",
      item_name: "Arial Work Platform(Double Mast)",
      capacity: "200KG",
      image: img2,
      select: "",
    },
  ];
  return (
    <div className="md:h-[620px] md:w-[80.24%] absolute left-[9.87%] rounded-[10px] shadow-rp sticky top-0">
      <p className="font-poppins h-[86px] pl-[3.14%] pt-[23px] not-italic font-bold md:text-2xl text-xl md: leadin text-baseg-10 text-[#004B95] bg-[#FFFFFF]">
        Related Products
      </p>
      <div className="h-[536px] w-full bg-[#FFFFFF] overflow-y-scroll">
        <table className="w-full border-separate border-spacing-y-[20px] ">
          <thead className="bg-[#004B95] h-[50px] sticky top-0">
            <tr className="">
              <th className="w-[15%] justify-center not-italic font-semibold md:text-xl text-base leading-8 text-white font-poppins tracking-wider">
                Model
              </th>
              <th className="w-[40%] justify-center not-italic font-semibold md:text-xl text-base leading-8 text-white font-poppins tracking-wider">
                Item Name
              </th>
              <th className="w-[15%] justify-center not-italic font-semibold md:text-xl text-base leading-8 text-white font-poppins tracking-wider">
                Capacity
              </th>
              <th className="w-[15%] justify-center not-italic font-semibold md:text-xl text-base leading-8 text-white font-poppins tracking-wider">
                Image
              </th>
              <th className="w-[15%] justify-center not-italic font-semibold md:text-xl text-base leading-8 text-white font-poppins tracking-wider">
                Select
              </th>
            </tr>
          </thead>
          <tbody className="bg-white h-[486px] overflow-y-auto">
            {products.map((product) => (
              <tr
                key={product.model}
                className="h-[120px] shadow-3xl"
              >
                <td className="w-[15%]">
                  <div className="text-center not-italic font-semibold md:text-xl text-base  leading-7 text-[#004B95] font-poppins">
                    {product.model}
                  </div>
                </td>
                <td className="w-[40%]">
                  <div className=" text-center not-italic font-semibold md:text-xl text-base  leading-7 text-[#004B95] font-poppins">
                    {product.item_name}
                  </div>
                </td>
                <td className="w-[15%] ">
                  <div className="text-center not-italic font-semibold md:text-xl text-base  leading-7 text-[#004B95] font-poppins">
                    {product.capacity}
                  </div>
                </td>
                <td className="w-[15%]">
                  <img src={product.image} alt="" />
                </td>
                <td className="w-[15%]">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TableData;