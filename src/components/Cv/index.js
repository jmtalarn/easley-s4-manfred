import React, { Component } from "react";
import PropTypes from "prop-types";
import Author from "../Author";
import Experience from "../Experience";
import Education from "../Education";
import Questionnaire from "../Questionnaire";
import MiscEducation from "../MiscEducation";
import './Cv.scss';

class Cv extends Component {
  render() {
    const { sample } = this.props;
    return (
      // Importado en:
      //     - Preview
      <div className="cv__wrapper">
        {/* Instancia:
          - Education
          - Languages
          - MiscEducation
          - Questionnaire */}
        <Author sampleAuthor={sample.author} />
        <Experience sample={sample} />
        <Education sampleEducation={sample.education}/>
        <MiscEducation sampleMiscEducation={sample.miscEducation} />
        <Questionnaire sampleQuestionnaire={sample.questionnaire} />
        {/* - Languages */}

      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
