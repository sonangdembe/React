
// const  App =()=> {
//   const vechile = ['BMW', 'tesla'];

//   const val = 1;
//   const val1 =1;
 

//       return (
//         <>
//       <div className="App" style= {{color:'red'}}>
//       <b>Hello world {(al+val1)},</b>
//         </div>
//         </>
// );
// };
// export default App;


import React from 'react';
import Contact  from "./components/Contact";
const App= () =>{

  const contacts = [
    {
      name:'john',
      number:'456',
       location: 'usa'
    },
    {
      name:'john1',
      number:'456',
       location: 'nepal'
    },
    {
      name:'john2',
      number:'456',
       location: 'ktm'
    },
  ];
  return(
 <>
 <div className= "container"><h3>Contact List</h3>
 <Contact data= {contacts[0]}/>
 <Contact data= {contacts[1]} />
 <Contact data= {contacts[2]}/>

 </div>
 </>
  );

};

export default App;