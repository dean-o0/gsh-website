// import React from "react";

// const Type = () => {
//     return (
//         <Typewriter
//             options={{
//                 strings: [
//                     "GSH",
//                     "Gold Standard Holdings"
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 deleteSpeed: 50,
//             }}
//         />
//     )
// }

// export default Type;

// src/component/Main/Type.jsx
import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["GSH", "Gold Standard Holdings"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
