import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageContent from './common/PageContent';
import Input from './common/Input';
import ObjectiveItem from './common/ObjectiveItem';
import { SubmitButton } from './common/Buttons';

import {
  CHANGE_PAGE,
  ADD_OBJECTIVE,
  DELETE_OBJECTIVE
} from '../sagas/types';

class Objectives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      maxLength: 75
    }
  }

  onTextChange(e) {
    this.setState({ term: e.target.value });
  }

  onPreviousClick() {
    this.props.dispatch({ type: CHANGE_PAGE, operation: 'DECREASE' });
  }

  onInputEnter(e) {
    if (!e) e = window.event;
    const keyCode = e.keyCode || e.which;;
    if (keyCode === 13) {
      this.onAddObjectiveSubmit();
      e.preventDefault();
    }
  }

  onAddObjectiveSubmit() {
    //submit button is allready disabled if term is empty string but i control it anyway
    if (this.state.term) {
      this.props.dispatch({ type: ADD_OBJECTIVE, objectiveText: this.state.term });
      this.setState({ term: '' });
    }
  }

  onDeleteObjective(index) {
    console.log(index);
    this.props.dispatch({ type: DELETE_OBJECTIVE, payload: index });
  }

  mapObjectives() {
    return this.props.contents.objectives.map((objective, index) => {
      return <ObjectiveItem key={index} text={objective} onDeleteClick={() => { this.onDeleteObjective(index) }} />
    });
  }

  render() {
    return (
      <div>
        <PageContent
          title="Objectives"
          currentPageNumber={this.props.contents.pageNumber}
          text="What bussiness objectives do you want to accomplish?"
          onPreviousClick={this.onPreviousClick.bind(this)}
        />
        <form className="main-content__form">
          <div className="input-wrapper">
            <Input
              name="addBrand"
              type="text"
              value={this.state.term}
              onChange={this.onTextChange.bind(this)}
              onKeyPress={this.onInputEnter.bind(this)}
              maxLength={this.state.maxLength}
              rounded={true}
            />
            <span className="plus-icon clickable" onClick={this.onAddObjectiveSubmit.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i></span>
          </div>
          <p className="main-content__form__char">{this.state.term.length}/{this.state.maxLength}</p>
          <div className="objectives-wrapper">
            {this.mapObjectives()}
          </div>
          <SubmitButton type="button" text="Finish Objectives" active={!!this.state.term} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { contents: state.contents };
}

export default connect(mapStateToProps, null)(Objectives);
