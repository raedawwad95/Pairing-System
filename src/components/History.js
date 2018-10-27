import React from 'react';
import $ from 'jquery';

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return ( 
      <div className ="row justify-content-center">
      <div className="card text-center " style={{width: "50%" , 'backgroundImage' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)'}}>
        <div className="card-body">
        <h3 className="text-center"> History</h3>
            <hr/>
            <table className="table">
              <thead>
                <tr>
                  <th>Student-1</th>
                  <th>Student-2</th>
                </tr>
              </thead>
              <tbody>  
              </tbody>  
            </table>
        </div>
      </div>
      </div>
    )  
  }

}

export default History;