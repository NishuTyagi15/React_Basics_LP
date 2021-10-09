import React from "react";

// function Greet() {
//     return <h1>Hello Nishu</h1>
// }

// export const Greet = () => <h2>Hello World!</h2>


const Greet = () => {
    // return(
    //     <div className = 'dummyClass'>
    //         <h2>Hello Shivam</h2>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Nishu!'))
}

export default Greet;