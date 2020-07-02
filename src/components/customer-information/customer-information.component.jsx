import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  TextField
} from 'office-ui-fabric-react/lib/TextField';

import CheckoutButton from '../../components/checkout-button/checkout-button.component';
import { selectorCustomer, selectorOptionSelected } from '../../redux/customer/customer.selectors';
import {
  fetchCustomerStart,
  updateCustomerByNameValue,
  setOptionSelected
} from '../../redux/customer/customer.actions';
import {
  CustomerInformationContainer,
  CustomerInformationTitle,
  CustomerInformationFormContainer,
  CustomerDetailInfoContainer,
  CustomerInfoDetailWelcomeBackTitle,
  CustomerInfoDetailInfoTitle
} from './customer-information.styles';
import { Item, Wrapper, RadioButton, RadioButtonLabel } from './new-existing-customer-radio-button.styles';

class CustomerInformation extends React.Component {


  handleSelectChange = async (event) => {
    const value = event.target.value;
    const { setOptionSelected } = this.props;
    console.log('VALUE:', value)
    await setOptionSelected(value);
  };

  handleSubmit = async (values, actions) => {
    const { fetchCustomerStart } = this.props;
    const { email } = values;
    await fetchCustomerStart({ email });
  };

  handleBlur = async (event) => {
    const { name, value } = event.target;
    const { updateCustomerByNameValue, customer } = this.props;
    await updateCustomerByNameValue(name, value, customer);
  }

  textField = ({field, form, ...props}) => {
    return <TextField {...field} {...props} />
  }

  initFormExistingCustomer = () => {
    const existingCustomerForm = ({
      handleSubmit,
      values,
      errors,
    }) => (
      <Form onSubmit={handleSubmit}>
        <Field 
          value={values.email}
          type="email"
          label="Email*"
          name="email" 
          component={this.textField} 
          errorMessage={errors.email?errors.email: ''}
          placeholder="Email"
        />
        <CheckoutButton type='submit'>Lookup</CheckoutButton>
      </Form>
    );
    return (
      <Formik 
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={this.handleSubmit}
        component={existingCustomerForm} />
    );
  }

  initFormNewCustomer = () => {;

    const existingCustomerForm = ({
      values,
      errors,
    }) => (
      <Form>
        <Field 
          value={values.fullName}
          onBlur={this.handleBlur}
          label="Full Name*"
          name="fullName" 
          component={this.textField} 
          errorMessage={errors.fullName?errors.fullName: ''}
          placeholder="Full Name"
        />
        <Field 
          value={values.identifier}
          onBlur={this.handleBlur}
          label="ID*"
          name="identifier" 
          component={this.textField} 
          errorMessage={errors.identifier?errors.identifier: ''}
          placeholder="ID"
        />
        <Field 
          value={values.address}
          onBlur={this.handleBlur}
          label="Address*"
          name = "address"
          component={this.textField} 
          errorMessage={errors.address?errors.address: ''}
          placeholder="Address"
        />
        <Field 
          value={values.phone}
          onBlur={this.handleBlur}
          label="Phone Number*"
          name = "phone"
          component={this.textField} 
          errorMessage={errors.phone?errors.phone: ''}
          placeholder="Phone"
        />
        <Field 
          value={values.email}
          onBlur={this.handleBlur}
          type="email"
          label="Email*"
          name="email" 
          component={this.textField} 
          errorMessage={errors.email?errors.email: ''}
          placeholder="Email"
        />
      </Form>
    );
    return (
      <Formik 
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          fullName: Yup.string()
            .required('Required'),
          identifier: Yup.string()
            .required('Required'),
          address: Yup.string()
            .required('Required'),
          phone: Yup.string()
            .required('Required'),
        })}
        component={existingCustomerForm} />
    );
  }

  initCustomerDetailInfo = (customer) => {
    const { fullName, identifier, address, phone, email} = customer;
    return (
      <CustomerDetailInfoContainer>
        <CustomerInfoDetailWelcomeBackTitle>Welcome back: {fullName}</CustomerInfoDetailWelcomeBackTitle>
        <CustomerInfoDetailInfoTitle>ID: {identifier}</CustomerInfoDetailInfoTitle>
        <CustomerInfoDetailInfoTitle>Address: {address}</CustomerInfoDetailInfoTitle>
        <CustomerInfoDetailInfoTitle>Phone number: {phone}</CustomerInfoDetailInfoTitle>
        <CustomerInfoDetailInfoTitle >Email: {email}</CustomerInfoDetailInfoTitle>
      </CustomerDetailInfoContainer>
    );
  }

  render() {
    const {customer, optionSelected} = this.props;
    console.log('optionSelected:::', optionSelected);
    return (
      <CustomerInformationContainer>
        <CustomerInformationTitle>Customer Information</CustomerInformationTitle>
        <CustomerInformationFormContainer>
          <Wrapper>
            <Item active={optionSelected === "optionA"}>
              <RadioButton
                type="radio"
                name="radio"
                value="optionA"
                checked={optionSelected === "optionA"}
                onChange={this.handleSelectChange}
              />
              <RadioButtonLabel />
              <div>New Customer</div>
            </Item>
            <Item active={optionSelected === "optionB"}>
              <RadioButton
                type="radio"
                name="radio"
                value="optionB"
                checked={optionSelected === "optionB"}
                onChange={this.handleSelectChange}
              />
              <RadioButtonLabel />
              <div>Existing Customer</div>
            </Item>
          </Wrapper>
          {
            customer && optionSelected !== "optionA" ? this.initCustomerDetailInfo(customer) : optionSelected === "optionA" ? this.initFormNewCustomer() : this.initFormExistingCustomer()
          } 
        </CustomerInformationFormContainer>
      </CustomerInformationContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  customer: selectorCustomer,
  optionSelected: selectorOptionSelected
});

const mapDispatchToProps = dispatch => ({
  fetchCustomerStart: customer => dispatch(fetchCustomerStart(customer)),
  updateCustomerByNameValue: (name, value, customer) => dispatch(updateCustomerByNameValue(name, value, customer)),
  setOptionSelected: option => dispatch(setOptionSelected(option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInformation);
