import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './common/Header';
import AddBrand from './AddBrand';
import Describe from './Describe';
import Objectives from './Objectives';

class Home extends Component {
  renderPage() {
    switch(this.props.contents.pageNumber) {
      case 1:
        return <AddBrand />
      case 2:
        return <Describe />
      case 3:
        return <Objectives />
      default:
        return <AddBrand />
    }
  }
  render() {
    console.log(this.props.contents);
    return(
      <div>
        <Header activeTabIndex={this.props.contents.pageNumber}/>
        <div className="row">
        <div className="col-md-6 mx-auto text-center main-content">
          {this.renderPage()}
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { contents: state.contents };
} 

export default connect(mapStateToProps, null)(Home);
