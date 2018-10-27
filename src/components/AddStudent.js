import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addNewStudent = this.addNewStudent.bind(this);
    this.state={
    students:[],
    fullName:'',
    level:'',
    id:''
  }
  }
  onChange(e){
  this.setState({
    [e.target.name]:e.target.value
  });

}
addNewStudent(){
  console.log(this.state)
var that=this;

$.ajax({
  type:"POST",
  url:'/students/create',
    data:{fullName:that.state.fullName,level:that.state.level},
    success:function(data){
      alert("data added")
    },
    error:function(err){
      console.log(err)
    }


})
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
  edit(id){
    console.log(id)
  var that =this;
  $.ajax({
  type:'put',
    url: '/students/edit',
    data:{id:that.state.id,level:that.state.level},
    success:function(data){
      alert('Edit Student')
    }
  });   
  }
  delete(id){
  $.ajax({
  type:'delete',
    url: '/students/'+id,
    success:function(data){
      alert('Delete Student')
    }
  });   
  }

  editId(id){
    this.setState({
      id:id
    })
  }
  
  render() {
    return ( 
      <div className ="row justify-content-center">
      <div className="card text-center " style={{width: "50%" , 'backgroundImage' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)'}}>
        <div className="card-body">
        <h3 className="text-center"> Add Student</h3>
        <hr/>
            <input type="text" placeholder="Full Name" name="fullName" onChange={this.onChange}/>
            <input type="text" placeholder="Level(1-5)" name="level" onChange={this.onChange}/>
            <input type="submit" value="Add" onClick={this.addNewStudent} style={{'borderRadius': '25px', 'backgroundColor':'#D17E7E'}}/>
            <hr/>
            <table className="table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Level</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.students.map((item, index) =>{
                return(
                <tr key={{index}}>
                  <td>{item.fullName}</td>
                  <td>{item.level}</td>
                  <td><input type="submit" value="Edit" data-toggle="modal" data-target="#myModal" onClick={this.editId.bind(this,item._id)} style={{'borderRadius': '25px', 'backgroundColor':'#D17E7E'}}/></td>
                  
                  <td><input type="submit" value="Delete" onClick={this.delete.bind(this,item._id)} style={{'borderRadius': '25px', 'backgroundColor':'#D17E7E'}}/></td>
                </tr>
                )
              })}  
              </tbody>  
            </table>
        </div>
      </div>
      <div className="modal fade" id="myModal">
    <div className="modal-dialog" >
    
      <div className="modal-content" style={{'backgroundImage' :'linear-gradient(#FEE8E8, #FADBDB, #F6E3E3)'}}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Level(1-5)" name="level" onChange={this.onChange}/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.edit.bind(this)} style={{'borderRadius': '25px', 'backgroundColor':'#D17E7E'}}>Edit Data</button>
          <button type="button" className="btn btn-default" data-dismiss="modal" style={{'borderRadius': '25px', 'backgroundColor':'#D17E7E'}}>Close</button>
        </div>
      </div>
      
    </div>
  </div>
      </div>
    )  
  }

}

export default AddStudent;