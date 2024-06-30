// import React, { useState } from 'react'
// import { Dave, NotDave , John, Sona} from "./Persons"

// const ContactAdder = () => {
// // making variable
// const [name, setName] = useState('John');

// const onClickHandler =() =>{
//   setName('Dave');
// };


// // for dynamic name
// let result;
// if (name === "Dave"){
//   result = <Dave></Dave>;
// }
// else if (name === "John"){
//   result  = <John></John>;
// }
// else if(name === "Sona"){
//   result = <Sona></Sona>;
// }

//   return (
//     <>Contact adder
//     <button onClick={onClickHandler}>Click me</button>
//     {/* <div >my name is {name}.{name=== "abc" ? 'green' :'red'}</div> */}
// {/*     
//     <div>
//       My name is {name}. {" "}
//       {name === "Dave" ? <Dave></Dave> : <NotDave></NotDave>}
//     </div> */}


//     <div>

//        My name is {name}. {result}
//     </div>
//     </>
//   )
// }

// export default ContactAdder




import React, { useState } from 'react'
import Dummy from './Dummy';


const ContactAdder = (props) => {

  const [name, setName] = useState("Sona");
  const [mobile, setMobile] = useState("123456789");
  const [location, setLocation] = useState("nepla");

  const onClickhandler = () => {

    const contactData = {name, number: mobile, location }
    props.onContactAdded(contactData);
  }

const dummyClickHandler = ()=>{
  props.childFunction();
}

  return (
    <>
    <div className='simpleAdder'>
      Contact Adder :
<br/>
      <input type = "text" value={name} placeholder='contact name' onChange={(e) => setName(e.target.value)}></input>
      <input type = "text" value={mobile} placeholder='mobile no' 
       onChange={(e) => setMobile(e.target.value)}
      ></input>
      <input type = "location" value={location} placeholder='locations' onChange={(e)=> setLocation(e.target.value)}></input>
<br/>
      <br/>
      <button onClick={onClickhandler}>Click me</button>
      </div>
      <Dummy onDummyClick ={dummyClickHandler}/>
      </>
  )
}

export default ContactAdder