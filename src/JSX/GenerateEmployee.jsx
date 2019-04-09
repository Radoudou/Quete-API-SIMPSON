import  React  from  'react';


const  GenerateSimpson = ({ selectEmployee }) => {
    return (
        <div  className="GenerateSimpson">
        <button  onClick={selectEmployee}>Get employee</button>
        </div>
    );
};

export  default  GenerateSimpson;