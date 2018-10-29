import React from 'react';
import $ from 'jquery';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      students:[]
    }
  }
  componentDidMount(){
    var that = this;
    $.ajax({
      type:'GET',
      url:'/pairing',
      success:function(data){
        that.setState({
          students:data
        })
      }
    })

  }
  
  render() {
    return ( 
      <div className ="row justify-content-center">
      <div className="card text-center " style={{width: "50%" , 'backgroundImage' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)', marginBottom :'10%'}}>
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
              {this.state.students.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td>{item.student1.fullName}</td>
                  <td>{item.student2.fullName}</td>
                  </tr>
                  )
              })} 
              </tbody>  
            </table>
        </div>
      </div>
      </div>
    )  
  }

}

export default History;