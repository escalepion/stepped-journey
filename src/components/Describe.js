import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextArea from './common/TextArea';
import { SubmitButton } from './common/Buttons';
import PageContent from './common/PageContent';

import { 
  ADD_DESCRIBE, 
  CHANGE_PAGE
} from '../sagas/types';

class Describe extends Component{
  constructor(props) {
    super(props);
    this.state = {
      term: this.props.contents.describeText,
      maxLength: 500
    }
  }

  onPreviousClick() {
    this.props.dispatch({ type: CHANGE_PAGE, operation: 'DECREASE' });
  }

  onTextAreaChange(e) {
    this.setState({ term: e.target.value });
  }

  onDescribeSubmit(e) {
    e.preventDefault();

    //submit button is allready disabled if term is empty string but i control it anyway
    if(this.state.term) {
      this.props.dispatch({ type: ADD_DESCRIBE, text: this.state.term, operation: 'INCREASE' });
    }
  }

  render() {
    return (
      <div>
        <PageContent
          title="Describe"
          currentPageNumber={this.props.contents.pageNumber}
          text="Tell us abour your brand..."
          onPreviousClick={this.onPreviousClick.bind(this)}
        />
        <form className="main-content__form" onSubmit={this.onDescribeSubmit.bind(this)}>
          <TextArea value={this.state.term} maxLength={this.state.maxLength} onChange={this.onTextAreaChange.bind(this)}/>
          <p className="main-content__form__char">{this.state.term.length}/{this.state.maxLength}</p>
          <SubmitButton type="submit" text="Next" active={!!this.state.term}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { contents : state.contents };
}

export default connect(mapStateToProps, null)(Describe);
