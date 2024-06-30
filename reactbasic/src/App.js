
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
import './index.css'
import Contact  from "./components/Contact";
import ContactAdder from './components/ContactAdder';

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
  const addContactData = (contactData) =>{
    contacts.push(contactData)
    console.log(contacts)
  }

  const childFunctionHandler =() =>{
    alert("grand child was called");
  }

return(
 <>
 <div className='contact_adder'>
  <ContactAdder 
  onContactAdded={addContactData}
  childFunction = {childFunctionHandler}
  />
 </div>
<div className='contact_list'>
  {contacts.map(data=> <Contact data={data}></Contact>)}
 </div>
 </>
);

};

export default App;