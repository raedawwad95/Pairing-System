import React from 'react';
import {NavLink} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return ( 
        <div className ="row justify-content-center">
        <div className="card text-center " style={{width: "50%" , 'background-image' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)'}}>
          <div className="card-body">
            <NavLink to = "/addStudent"> 
            <button type="button" class="btn btn-primary" style={{width: "50%"}}>Add Student</button>
            </NavLink>
            <br/>
            <br/>
            <NavLink to = "/pairing">    
            <button type="button" class="btn btn-primary" style={{width: "50%"}} >Pairing</button>
            </NavLink>
            <br/>
            <br/>
            <NavLink to = "/history"> 
            <button type="button" class="btn btn-primary" style={{width: "50%"}}>History</button>
            </NavLink>
          </div>
        </div>
        </div>
      )  
    }

}

export default Home;