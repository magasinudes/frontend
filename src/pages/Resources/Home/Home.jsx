import React from "react";
import { AppContainer, AppContent } from "$common";

import SearchBar from "./SearchBar";
import CategoriesContainer from "./CategoriesContainer";

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
            campusOptions={[
              { id: "1", text: "Campus principal" },
              { id: "2", text: "Campus de la santé" },
              { id: "3", text: "Campus de Longueuil" },
            ]}
            categoryOptions={[
              { id: "1", text: "Consommable" },
              { id: "2", text: "Emprumtable" },
              { id: "3", text: "Réservable" },
            ]}
            onChange={this.handleChange}
          />
          <CategoriesContainer
            outlet={{ id: "1", name: "Outlet 1" }}
            categories={[
              { id: "1", name: "Catégorie 1" },
              { id: "2", name: "Catégorie 2" },
              { id: "3", name: "Catégorie 3" },
              { id: "4", name: "Catégorie 4" },
              { id: "5", name: "Catégorie 5" },
              { id: "6", name: "Catégorie 6" },
              { id: "7", name: "Catégorie 7" },
            ]}
          />
          <CategoriesContainer
            outlet={{ id: "2", name: "Outlet 2" }}
            categories={[
              { id: "8", name: "Catégorie 1" },
              { id: "9", name: "Catégorie 2" },
              { id: "10", name: "Catégorie 3" },
              { id: "11", name: "Catégorie 4" },
              { id: "12", name: "Catégorie 5" },
              { id: "13", name: "Catégorie 6" },
              { id: "14", name: "Catégorie 7" },
            ]}
          />
          <CategoriesContainer
            outlet={{ id: "3", name: "Outlet 3" }}
            categories={[
              { id: "15", name: "Catégorie 1" },
              { id: "16", name: "Catégorie 2" },
              { id: "17", name: "Catégorie 3" },
              { id: "18", name: "Catégorie 4" },
              { id: "19", name: "Catégorie 5" },
              { id: "20", name: "Catégorie 6" },
              { id: "21", name: "Catégorie 7" },
              { id: "22", name: "Catégorie 8" },
              { id: "23", name: "Catégorie 9" },
            ]}
          />
        </AppContent>
      </AppContainer>
    );
  }
}

export default Home;
