import React from "react";
import { AppContainer, AppContent } from "$common";

import SearchBar from "./SearchBar";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      campusId: "",
      categoryTypeId: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  fetchResources() {
    console.log("Fetching resources...", this.state);
  }

  handleChange(attribute, value) {
    this.setState({ [attribute]: value }, this.fetchResources);
  }

  render() {
    return (
      <AppContainer>
        <AppContent>
          <SearchBar
            campusOptions={[]}
            categoryOptions={[]}
            onChange={this.handleChange}
          />
        </AppContent>
      </AppContainer>
    );
  }
}

export default Home;
