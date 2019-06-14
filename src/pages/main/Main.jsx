import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Text, Block } from "./styled";
import MainView from "./mainView";
import LoadingComponent from "../../loader/LoadingComponent";
import SelectHalls from "./SelectHalls";
import axios from "axios";

const mapState = state => ({
  loading: state.async.loading
});

class Main extends Component {
  state = {
    isError: false,
    selectedOption: null,
    clearable: true
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  componentDidMount() {
    const user = localStorage.getItem("user");

    if (user) {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "token"
      );
    }
  }

  render() {
    const { isError, selectedOption, clearable } = this.state;
    const { loading } = this.props;

    if (loading) {
      return <LoadingComponent />;
    } else {
      return (
        <Fragment>
          {!isError && (
            <Block>
              <SelectHalls
                selectedOption={selectedOption}
                clearable={clearable}
                handleChange={this.handleChange}
              />
              <MainView selectedOption={selectedOption} />
            </Block>
          )}
          {isError && <Text>Error!!!</Text>}
        </Fragment>
      );
    }
  }
}

export default withRouter(connect(mapState)(Main));
