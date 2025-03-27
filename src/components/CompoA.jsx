import React from "react";

const CompoA = (props) => {
  console.log(props.propiedad);
  console.log(props.perso);
  return (
    <div>
      <p>{propiedad}</p>
      <p>{perso}</p>
    </div>
  );
};

export default CompoA;
/*traer props desde elemento padre "App.jsx" hasta el hijo
"CompoA.jsx"*/
