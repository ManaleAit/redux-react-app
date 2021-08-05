import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteAdmin} from '../../actions/adminActions';
class Admin extends Component {
  state = {
    showAdminInfo: true
  };

  onDeleteClick = id => {
    //// DELETE Admin ////
    this.props.deleteAdmin(id);
  };

  render() {
    const {id, nom,  prenom, email, adresse, telephone} = this.props.admin;
    const { showAdminInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {nom}{' '}
          <button
            onClick={() =>
              this.setState({
                showAdminInfo: !this.state.showAdminInfo
              })
            }
          className="btn btn-info"
          >cacher</button>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this, id)}
          >delete</button>
          <Link to={`Admin/edit/${id}`}>
            <button
              className="btn btn-warning" 
            >Edit</button>
          </Link>
        </h4>
        {showAdminInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">telephone: {telephone}</li>
            <li className="list-group-item">Adresse: {adresse}</li>
            <li className="list-group-item">prenom: {prenom}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Admin.propTypes = {
  admin: PropTypes.object.isRequired
};


export default connect(null,{deleteAdmin})(Admin);
