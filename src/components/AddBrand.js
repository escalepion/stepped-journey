import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './common/Input';
import { SubmitButton } from './common/Buttons';
import PageContent from './common/PageContent';

import { ADD_BRAND } from '../sagas/types';

class AddBrand extends Component{
  constructor(props) {
    super(props);
    this.state = {
      term: this.props.contents.brandName
    }
  }

  onTextChange(e) {
    this.setState({ term: e.target.value });
  }

  onAddBrandSubmit(e) {
    e.preventDefault();

    //submit button is allready disabled if term is empty string but i control it anyway
    if(this.state.term) {
      this.props.dispatch({ type: ADD_BRAND, brandName: this.state.term, operation: 'INCREASE' });
    }
  }

  render() {
    return (
      <div>
        <PageContent
          title="Brand Name"
          currentPageNumber={this.props.contents.pageNumber}
          text="What is the name of your brand?"
        />
        <form className="main-content__form" onSubmit={this.onAddBrandSubmit.bind(this)}>
          <Input name="addBrand" type="text" value={this.state.term} onChange={this.onTextChange.bind(this)} />
          <SubmitButton type="submit" text="Next" active={!!this.state.term}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { contents : state.contents };
}

export default connect(mapStateToProps, null)(AddBrand);
