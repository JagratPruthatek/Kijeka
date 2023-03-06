import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";

function ProductCompare() {
     const products = [
          {
               img1: { img1 },
               description1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet praesentium maiores deleniti doloremque debitis. Explicabo corrupti libero, laborum ullam, ipsum cupiditate aspernatur earum sint error tenetur itaque doloribus similique repudiandae?",
               model1: "KEAWPS",
               capacity1: "130KG",
               max_work_height: "8m",
               max_platform_height: "6m",
               lifting_motor_ac: "0.75 KW",
               machine_weight: "325 KG",
          },
          {
               img2: { img2 },
               description2: "Regional Paradigm Technician",
               model2: "KEAWPD",
               capacity2: "200KG",
               max_work_height2: "8m",
               max_platform_height2: "6m",
               lifting_motor_ac2: "1.1 KW",
               machine_weight2: "630 KG",
          },
     ];
     // useEffect(() => {
     //   axios.get('/data')
     //     .then(response => setData(response.data))
     //     .catch(error => console.error(error));
     // }, []);

     return (
          <div className="flex flex-col mt-24 mb-10">
               <div className="">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                         <div >
                              <table className="min-w-full divide-y divide-gray-200 border sm:overflow-x-auto">
                                   <tbody className="bg-white divide-y divide-gray-200">
                                        <>
                                             <tr>
                                                  <td className="px-6 py-4 whitespace-nowrap border w-[24%] border-[#004B95]">
                                                       <div className="flex items-center">
                                                            <div className="content-center font-poppins font-[#004B95] not-italic text-xl font-semibold text-[#004B95] sticky">Product</div>
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 whitespace-wrap border border-[#004B95] w-[38%]">
                                                       <div className="flex justify-center">
                                                            <img src={img1}>
                                                            </img>
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 whitespace-wrap border border-[#004B95] w-[38%]">
                                                       <div className="text-sm text-gray-900 flex justify-center">
                                                            <img src={img2}></img>
                                                       </div>
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td className="px-6 py-4 whitespace-nowrap border w-[24%] border-[#004B95]">
                                                       <div className="flex items-center">
                                                            <div className="content-center absolute w-20 h-8 not-italic font-semibold text-xl leading-8 text-[#004B95] font-poppins sticky md:w-full w-[10%]">Description</div>
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 whitespace-wrap border border-[#004B95] w-[38%]">
                                                       <div>
                                                            {products.map(data => (<div key={data.model1}>{data.description1}</div>))}
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 whitespace-wrap border border-[#004B95] w-[38%]">
                                                       <div className="text-sm text-gray-900">
                                                       </div>
                                                       {products.map(data => (<div key={data.model2}>{data.description2}</div>))}
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td className="px-6 py-4 whitespace-nowrap border w-[24%] border-[#004B95]">
                                                       <div className="flex items-center">
                                                            <div className="content-center absolute w-20 h-8 not-italic font-semibold text-xl leading-8 text-[#004B95] font-poppins sticky ">Model</div>
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 whitespace-wrap border border-[#004B95] w-[38%]">
                                                       <div>
                                                            {products.map(data => (<div key={data.model1}>{data.model1}</div>))}
                                                       </div>
                                                  </td>
                                                  <td className="px-6 py-4 whitespace-wrap border border-[#004B95] w-[38%]">
                                                       <div className="text-sm text-gray-900">
                                                            {products.map(data => (<div key={data.model2}>{data.model2}</div>))}
                                                       </div>
                                                  </td>
                                             </tr>
                                        </>
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default ProductCompare;
