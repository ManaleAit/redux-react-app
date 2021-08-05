import React, { Component } from 'react';
import Admin from './Admin';
import {connect} from 'react-redux';
import {getAdmins} from '../../actions/adminActions'
class Admins extends Component {
 
componentDidMount(){
  this.props.getAdmins();
}
  render() {
    const { admins } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Admins</span> List
        </h1>
        {admins.map(admin => (
          <Admin key={admin.id} admin={admin} />
        ))}
      </React.Fragment>
    );
  }
}
//conecter component avec store
const mapStateToProps=(state)=>{
  return {
    admins: state.myAdmin.admins
  }
}

export default connect(mapStateToProps,{getAdmins})(Admins);
