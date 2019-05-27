import React from "react";
import { withRouter } from "react-router-dom";
import { AppContainer, AppContent, AppMain } from "$common";
import withRouterShape from "$utils/withRouterShape";

import "./NotFound.css";

class NotFound extends React.PureComponent {
  static propTypes = {
    ...withRouterShape,
  }

  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <AppContainer fluid>
        <AppContent>
          <AppMain>
            <div className="notFound">
              <div className="notFound-404">
                <h1>404</h1>
              </div>
              <h2>Page non trouvée</h2>
              <p>
                La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.
              </p>
              <a
                onClick={this.handleBackClick}
                role="button"
                tabIndex="0"
              >
                Retour
              </a>
            </div>
          </AppMain>
        </AppContent>
      </AppContainer>
    );
  }
}

export default withRouter(NotFound);
