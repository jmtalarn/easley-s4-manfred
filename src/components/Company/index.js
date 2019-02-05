import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import RoleList from "../RoleList";
import ReferencesList from "../ReferencesList";
import "./Company.scss";

class Company extends Component {
  // render() {
  //     const {company} = this.props.experience;
  //     return (
  //       <li className="company__item">
  //         {company.map((item, index) => {
  //           return (
  //             (item.references[0].name !== "") ?
  //               <Fragment key={index}>
  //                 <h4 className="company__name"> {item.name}</h4>
  //                 <RoleList roles={item.roles} />
  //                 <ReferencesList references={item.references} />
  //               </Fragment> :
  //               <Fragment key={index}>
  //                 <h4 className="company__name"> {item.name}</h4>
  //                 <RoleList roles={item.roles} />
  //               </Fragment>
  //           );
  //         })}
  //       </li>
  //     );
  // }

  render() {
    const { company } = this.props.experience;
    return (
      <Fragment>
        {company.map((item, index) => {
          return item.references[0].name !== "" ? (
            <li key={index} className="company__item">
              <h4 className="company__name"> {item.name}</h4>
              <RoleList roles={item.roles} />
              <ReferencesList references={item.references} />
            </li>
          ) : (
            <li key={index} className="company__item">
              <h4 className="company__name"> {item.name}</h4>
              <RoleList roles={item.roles} />
            </li>
          );
        })}
      </Fragment>
    );
  }
}

Company.propTypes = {
  experience: PropTypes.object.isRequired
};

export default Company;
