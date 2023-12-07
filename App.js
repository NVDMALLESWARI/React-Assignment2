
import './App.css';
import Header from './Header';
import Products from './Products';
import {useState} from 'react';
function App() {

  // function doSomething(data){
  //   console.log("clicked"+data)
  // }

  // let name="malli";
  // let[name,setName]=useState("malli")
  // function changeData(){
  //   setName("sai")
  //   console.log(name);
  // }
  // let[name,setName]=useState()
  // let[age,setAge]=useState()
  // return (
    
    // <div className="App">
  {/* //     <h2>Just a component</h2>
  //     <h3>{name}</h3> */}
     {/* <h3>Name</h3>
     <h3>{name}</h3> */}
     {/* <input type="text" placeholder='Enter Name' onChange={(event)=>{
         setName(event.target.value)
     }}/>
     <input type="number" placeholder='Enter Age' onChange={(event)=>{
         setAge(event.target.value)
     }}/>
     <button type='button' onClick={()=>{
       console.log(name,age)
     }}>Submit</button> */}
    
      {/* // <button onClick={changeData}>Click</button> */}

    // </div>
    let countries=[
      {id:1,name:"India",capital:"New Delhi"},
      {id:2,name:"South Africa",capital:"Cape Town"},
      {id:3,name:"New Zealand",capital:"Wellington"}
    ]
    return(
    <div className='App'>
      <Header></Header>
    <Products /> 
       {/* <div className='data'>
      <h3>{countries[0].name}</h3>
      <p>{countries[0].capital}</p>

    </div>
    <div className='data'>
        <h3>{countries[1].name}</h3>
        <p>{countries[1].capital}</p>
    </div>
    <div className='data'>
        <h3>{countries[2].name}</h3>
        <p>{countries[2].capital}</p>
    </div> */}
       {
          countries.map((country)=>{
            return(
              <div className='data' key={country.id}>
                <h3>{country.name}</h3>
                 <p>{country.capital}</p>
              </div>
            )
          })
       }
    </div>
    
    )
  
}

export default App;
