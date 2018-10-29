import React from 'react';
import $ from 'jquery';

class Pairing extends React.Component {
  constructor(props) {
    super(props);
    this.randPairing = this.randPairing.bind(this);
    this.savePairing = this.savePairing.bind(this);
    this.state = {
      students:[],
      student1:[],
      student2:[]
    }
  }
  componentDidMount() {
  var that=this;
  $.ajax({
  type:'GET',
    url: '/students',
    success:function(data){
      that.setState({
        students:data
      })
    }
  });

}
savePairing(){
  var length=this.state.student1.length;
  var that = this;
  for(var i = 0 ;i<length;i++){
    $.ajax({
    type:'POST',
    url:'/pairing',
    data:{student1:this.state.student1[i]._id,student2:this.state.student2[i]._id},
    success:function(data){
      console.log(data)
    }
  })
  }

}
randPairing(){
  var st1 =[];
  var st2 =[];
  var length=this.state.students.length;
  for (var i = 0; i <length ; i++) {
    if(i%2===0){
      var addAndremove=Math.floor(Math.random() * (this.state.students.length - 1 + 1))
      st1.push(this.state.students[addAndremove]);
      this.state.students.splice(addAndremove, 1);
      
    }else{
      var addAndremove=Math.floor(Math.random() * (this.state.students.length - 1 + 1))
      st2.push(this.state.students[addAndremove])
      this.state.students.splice(addAndremove, 1);
    }
  }
  this.setState({
    student1:st1,
    student2:st2
  })

}

  render() {
    return ( 
      <div className ="row justify-content-center">
      <div className="card text-center " style={{width: "50%" , 'backgroundImage' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)'}}>
        <div className="card-body">
        <h3 className="text-center"> Paring</h3>
            <hr/>
             <input type="submit" value="Pairing" onClick={this.randPairing} style={{'borderRadius': '25px','width':'100px','marginRight':'50%', 'backgroundColor':'#D17E7E'}}/>
              <input type="submit" value="Save" onClick={this.savePairing} style={{'borderRadius': '25px','width':'100px', 'backgroundColor':'#D17E7E'}}/>
            <table className="table">
              <thead>
                <tr>
                  <th>Student-1</th>
                  <th>Student-2</th>
                </tr>
              </thead>
              <tbody>
              {this.state.student1.map((item, index) =>{
                return(
                <tr key={{index}}>
                  <td>{item.fullName}</td>
                  <td>{this.state.student2[index].fullName}</td>
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

export default Pairing;