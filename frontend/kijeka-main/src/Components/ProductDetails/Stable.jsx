import React from "react";
import "../tailwind.css";

function Stable() {
  const products = [
    {
      features: "Safe working load",
      model1: "130KG",
      model2: "130KG",
      model3: "130KG",
      model4: "130KG",
    },
    {
      features: "Allowable number of people",
      model1: "1",
      model2: "1",
      model3: "1",
      model4: "1",
    },
    {
      features: "The maximum working height",
      model1: "08.00M",
      model2: "10.00M",
      model3: "11.00M",
      model4: "12.00M",
    },
    {
      features: "The maximum platform height",
      model1: "06.00M",
      model2: "08.00M",
      model3: "09.00M",
      model4: "10.00M",
    },
    {
      features: "Machine length C",
      model1: "01.34M",
      model2: "01.34M",
      model3: "01.45M",
      model4: "0.45M",
    },
    {
      features: "Machine width W",
      model1: "0.45M",
      model2: "0.45M",
      model3: "0.45M",
      model4: "0.45M",
    },
    {
      features: "Machine height H0",
      model1: "2.00M",
      model2: "2.00M",
      model3: "2.00M",
      model4: "2.00M",
    },
    {
      features: "Machine height H0",
      model1: "2.00M",
      model2: "2.00M",
      model3: "2.00M",
      model4: "2.00M",
    },
  ];
  return (
    <div className="mt-[55px]">
      <p className="font-poppins not-italic font-bold text-2xl leading-10 text-[#004B95] mx-[10%] ">
        Full Details
      </p>
      <div className="mx-[8%] mb-[8%] mt-[40px] overflow-y-auto h-[570px]">
        <table className="sm:w-full sticky top-0 bg-[#FFFFFF]">
          <thead className=" border border-y-1 border-[#004B95]">
            <tr className="h-[107px]">
              <th className="w-[36%] border border-[#004B95] font-poppins not-italic font-bold text-2xl text-[#004B95]">
                Product Number
              </th>
              <th
                colSpan={4}
                className="w-[64%] border border-[#004B95] font-poppins not-italic font-bold text-2xl text-[#004B95]"
              >
                Aluminium Aerial Work Platform- Single Mast
              </th>
            </tr>
          </thead>
        </table>
        <table className="sm:w-full">
          <tbody className="h-[460px] overflow-y-scroll">
            {products.map((product) => (
              <tr className="h-[70px]">
                <td className="w-[36%] border border-[#004B95] font-poppins not-italic font-normal text-xl leading-6 text-[#898989] pl-[2.5%]">
                  {product.features}
                </td>
                <td className="w-[16%] border border-[#004B95] font-poppins not-italic font-normal text-xl leading-6 text-[#898989] pl-[2.5%]">
                  {product.model1}
                </td>
                <td className="w-[16%] border border-[#004B95] font-poppins not-italic font-normal text-xl leading-6 text-[#898989] pl-[2.5%]">
                  {product.model2}
                </td>
                <td className="w-[16%] border border-[#004B95] font-poppins not-italic font-normal text-xl leading-6 text-[#898989] pl-[2.5%]">
                  {product.model3}
                </td>
                <td className="w-[16%] border border-[#004B95] font-poppins not-italic font-normal text-xl leading-6 text-[#898989] pl-[2.5%]">
                  {product.model4}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stable;
