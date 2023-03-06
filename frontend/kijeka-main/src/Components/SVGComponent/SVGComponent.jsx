import * as React from "react";

const SVGComponent = (props) => (
     <svg
          width={"100vw"}
          height={457}
          viewBox="0 0 1512 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
     >
          <rect width={1512} height={457} fill="url(#pattern0)" />
          <rect width={1512} height={457} fill="#00154B" fillOpacity={0.8} />
          <defs>
               <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
               >
                    <use
                         xlinkHref="#image0_176_892"
                         transform="matrix(0.000291036 0 0 0.000962903 0 -0.739737)"
                    />
               </pattern>
               <image
                    id="image0_176_892"
                    width={3436}
                    height={2575}
               />
          </defs>
     </svg>
);
export default SVGComponent;