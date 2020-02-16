import React from 'react';



const App=() => {
  const dc= {
    photo:{'profile.png'},

    Name:{firstName:”nedra”, lastName:”boughaba”},
  
    profileLink:””,
  }
return(
  <>  


<img>{dc.photo}</img>
<p>name:{dc.Name.firstName},{dc.Name.lastName}</p>
<button onSimpleClick={()=>{
  window.location=''
}}>{profileLink}</button>

</>);
}
export default App;



