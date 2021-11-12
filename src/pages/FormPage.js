import { useFormik } from 'formik';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setFormData } from '../redux';
import SuccessPage from './SuccessPage';
import './FormPage.css';
import { Redirect } from 'react-router';

const FormPage = ({userData, setUserData}) => {
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
        },
        onSubmit: (values)=>{
            setUserData(values)
            console.log(values)
            setSubmitted(true)
        }
    })

    return (
        <div className='marginTop'>
            <h1 className='text-fill-form'>Please Fill the form</h1>
            <div className='home-container'>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    className='form-inp'
                    placeholder='Please Enter First Name'
                    {...formik.getFieldProps('firstName')}
                /> <br/>

                <input
                    type="text"
                    className='form-inp'
                    placeholder='Please Enter Last Name'
                    {...formik.getFieldProps('lastName')}
                /><br/>

                <input
                    type="text"
                    className='form-inp'
                    placeholder='Please Enter Phone number'
                    {...formik.getFieldProps('phoneNumber')}
                /><br/>

                <input
                    type="text"
                    className='form-inp'
                    placeholder='Please Enter Email'
                    {...formik.getFieldProps('email')}
                /><br/>

                <button className='submit-btn' type='submit'>Submit</button>
            </form>
            </div>
        {submitted && <Redirect to='/success' />}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      userData: state.users,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setUserData: (values) => dispatch(setFormData(values)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)
