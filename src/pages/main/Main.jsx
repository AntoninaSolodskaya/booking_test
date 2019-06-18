import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Text, Block } from "./styled";
import MainView from "./mainView";
import LoadingComponent from "../../loader/LoadingComponent";
import Select from "react-select";
import axios from "axios";

const mapState = state => ({
  loading: state.async.loading,
  halls: state.halls
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
    const { loading, halls } = this.props;
    let options = halls.map(hall => {
      return {
        value: hall._id,
        label: hall.title,
        description: hall.description,
        imageUrl: hall.imageURL
      };
    });

    if (loading) {
      return <LoadingComponent />;
    } else {
      return (
        <Fragment>
          {!isError && (
            <Block>
              <Select
                isMulti
                name="category"
                value={selectedOption}
                clearable={clearable}
                options={options}
                labelKey="title"
                valueKey="title"
                onChange={this.handleChange}
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
