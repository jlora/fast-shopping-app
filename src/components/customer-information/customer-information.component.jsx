import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectorCustomer } from '../../redux/customer/customer.selectors';
import { fetchCustomerStart } from '../../redux/customer/customer.actions';
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
  constructor() {
    super();

    this.state = {
      fullName: '',
      identifier: '',
      address: '',
      phone: '',
      email: '',
      select: "optionA",
    };
  }

  handleSelectChange = event => {
    const value = event.target.value;
    this.setState({ select: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { fetchCustomerStart } = this.props;
    const { email } = this.state;

    fetchCustomerStart({ email });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  initFormExistingCustomer = () => {
    const { email } = this.state;
    return (
      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Email'
          required
        />
        <CustomButton type='submit'>LOOKUP</CustomButton>
      </form>
    );
  }

  initFormNewCustomer = () => {
    const { fullName, identifier, address, phone, email } = this.state;
    return (
      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='fullName'
          value={fullName}
          onChange={this.handleChange}
          label='Full Name'
          required
        />
        <FormInput
          type='text'
          name='identifier'
          value={identifier}
          onChange={this.handleChange}
          label='ID'
          required
        />
        <FormInput
          type='text'
          name='address'
          value={address}
          onChange={this.handleChange}
          label='Address'
          required
        />
        <FormInput
          type='text'
          name='phone'
          value={phone}
          onChange={this.handleChange}
          label='Phone'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Email'
          required
        />
      </form>
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
    const {select } = this.state;
    const {customer} = this.props;
    return (
      <CustomerInformationContainer>
        <CustomerInformationTitle>Customer Information</CustomerInformationTitle>
        <CustomerInformationFormContainer>
          <Wrapper>
            <Item active={select === "optionA"}>
              <RadioButton
                type="radio"
                name="radio"
                value="optionA"
                checked={select === "optionA"}
                onChange={this.handleSelectChange}
              />
              <RadioButtonLabel />
              <div>New Customer</div>
            </Item>
            <Item active={select === "optionB"}>
              <RadioButton
                type="radio"
                name="radio"
                value="optionB"
                checked={select === "optionB"}
                onChange={this.handleSelectChange}
              />
              <RadioButtonLabel />
              <div>Existing Customer</div>
            </Item>
          </Wrapper>
          {
            customer && select !== "optionA" ? this.initCustomerDetailInfo(customer) : select === "optionA" ? this.initFormNewCustomer() : this.initFormExistingCustomer()
          } 
        </CustomerInformationFormContainer>
      </CustomerInformationContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  customer: selectorCustomer
});

const mapDispatchToProps = dispatch => ({
  fetchCustomerStart: customer => dispatch(fetchCustomerStart(customer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInformation);
