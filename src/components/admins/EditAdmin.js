import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import {connect} from 'react-redux';
import {getAdmin,updateAdmin} from '../../actions/adminActions'

class EditAdmin extends Component {
  componentDidMount(){
    const {id}=this.props.match.params;
    this.props.getAdmin(id);
  }
  componentWillReceiveProps(nextProps,nextState){
    const {nom, prenom, email,adresse,telephone}=nextProps.admin;
    this.setState({
        nom, 
        prenom, 
        email,
        adresse,
        telephone
    })
  }
  state = {
    nom:'', 
    prenom:'', 
    email:'',
    adresse:'',
    telephone:'',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { nom, prenom, email,adresse,telephone} = this.state;

    // Check For Errors
    if (nom === '') {
        this.setState({ errors: { nom: 'LastName is required' } });
        return;
      }
      if (prenom === '') {
          this.setState({ errors: { prenom: 'FirstName is required' } });
          return;
        }
      if (email === '') {
        this.setState({ errors: { email: 'Email is required' } });
        return;
      }
      if (adresse === '') {
          this.setState({ errors: { adresse: 'Adress is required' } });
          return;
        }
      if (telephone === '') {
        this.setState({ errors: { telephone: 'Phone is required' } });
        return;
      }
  
    const { id } = this.props.match.params;

    const updAdmin = {
        id,
        nom, 
        prenom, 
        email,
        adresse,
        telephone
    };
    this.props.updateAdmin(updAdmin);

    //// UPDATE CONTACT ////

    // Clear State
    this.setState({
        nom:'', 
        prenom:'', 
        email:'',
        adresse:'',
        telephone:'',
        errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { nom, prenom, email,adresse,telephone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="LasatName"
              name="nom"
              placeholder="Enter LastName"
              value={nom}
              onChange={this.onChange}
              error={errors.nom}
            />
             <TextInputGroup
              label="FirstName"
              name="prenom"
              placeholder="Enter FirstName"
              value={prenom}
              onChange={this.onChange}
              error={errors.prenom}
            />
             <TextInputGroup
              label="Adress"
              name="adresse"
              placeholder="Enter Adress"
              value={adresse}
              onChange={this.onChange}
              error={errors.adresse}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="telephone"
              placeholder="Enter Phone"
              value={telephone}
              onChange={this.onChange}
              error={errors.telephone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
//pour recuperer state
const mapStateToProps=(state)=>{
  return {
    admin: state.myAdmin.admin
  }
}

export default connect(mapStateToProps,{getAdmin,updateAdmin})(EditAdmin);
