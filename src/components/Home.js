import React from 'react';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      return ( 
        <div className ="row justify-content-center">
        <div className="card text-center " style={{width: "50%" , 'background-image' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)'}}>
          <div className="card-body">
            <button type="button" class="btn btn-primary" style={{width: "50%"}}>Add Student</button>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary" style={{width: "50%"}}>Paring</button>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary" style={{width: "50%"}}>History</button>
          </div>
        </div>
        </div>
      )  
    }

}

export default Home;