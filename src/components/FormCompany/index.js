import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormCompany extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveExperienceItem, ind } = this.props;
    handleRemoveExperienceItem(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleExperienceChange, ind } = this.props;
    handleExperienceChange(value, name, ind);
  }

  render() {
    const { name } = this.props;
    return (
      <Fragment>
        <FormInput
          labelContent="Company name"
          styles="form__input"
          inputType="text"
          inputName="name"
          inputValue={name}
          example="Ex: Google"
          handleInputChange={this.handleInputChange}
        />
        <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.handleRemoveBtn}
        >
          Remove
        </Button>
      </Fragment>
    );
  }
}

FormCompany.propTypes = {
  ind: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleRemoveExperienceItem: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired
};

export default FormCompany;