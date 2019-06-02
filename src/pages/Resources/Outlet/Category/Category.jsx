import React from "react";
import { AppContainer, AppContent } from "$common";
import withRouterShape from "$utils/withRouterShape";

import SearchBar from "../../SearchBar";
import CategoriesContainer from "../../CategoriesContainer";
import ResourcesList from "./ResourcesList";

class Category extends React.PureComponent {
  static propTypes = {
    ...withRouterShape,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      categoryTypeId: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  fetchResources() {
    console.log("Fetching category ressources...", this.props.match.params, this.state);
  }

  handleChange(attribute, value) {
    this.setState({ [attribute]: value }, this.fetchResources);
  }

  render() {
    return (
      <AppContainer>
        <AppContent>
          <SearchBar
            categoryOptions={[
              { id: "1", text: "Consommable" },
              { id: "2", text: "Emprumtable" },
              { id: "3", text: "Réservable" },
            ]}
            onChange={this.handleChange}
          />
          <CategoriesContainer
            category={{ id: "1", name: "Category X" }}
            categories={[
              { id: "24", name: "Catégorie 1" },
              { id: "25", name: "Catégorie 2" },
              { id: "26", name: "Catégorie 3" },
            ]}
          />
          <ResourcesList
            resources={[
              { id: "1", name: "Ressource 1" },
              { id: "2", name: "Ressource 2" },
              { id: "3", name: "Ressource 3" },
              { id: "4", name: "Ressource 4" },
              { id: "5", name: "Ressource 5" },
              { id: "6", name: "Ressource 6" },
              { id: "7", name: "Ressource 7" },
              { id: "8", name: "Ressource 8" },
              { id: "9", name: "Ressource 9" },
              { id: "10", name: "Ressource 10" },
            ]}
          />
        </AppContent>
      </AppContainer>
    );
  }
}

export default Category;
