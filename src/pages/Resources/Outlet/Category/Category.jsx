import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import {
  AppContainer,
  AppContent,
  Modal,
} from "$common";
import { ResourcesService } from "$services/microservices";
import withRouterShape from "$utils/withRouterShape";

import SearchBar from "../../SearchBar";
import CategoriesContainer from "../../CategoriesContainer";
import ResourcesList from "./ResourcesList";

import styles from "./Category.css";

class Category extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    ...withRouterShape,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      categoryTypeId: "",
      mainCategory: null,
      toggleResourceModal: false,
      resourceName: "",
      resourceDescription: "",
      resourceQuantity: "",
      resourceCost: "",
      resourceCostType: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleAddResource = this.handleAddResource.bind(this);
    this.handleToggleResourceModal = this.handleToggleResourceModal.bind(this);
    this.handleResourceNameChange = this.handleResourceNameChange.bind(this);
    this.handleResourceDescriptionChange = this.handleResourceDescriptionChange.bind(this);
    this.handleResourceQuantityChange = this.handleResourceQuantityChange.bind(this);
    this.handleResourceCostChange = this.handleResourceCostChange.bind(this);
    this.handleResourceCostTypeChange = this.handleResourceCostTypeChange.bind(this);
    this.handleResourceSubmit = this.handleResourceSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchResources();
  }

  async fetchResources() {
    const { params } = this.props.match;
    console.log("Fetching category ressources...", this.props.match.params, this.state);
    const result = await ResourcesService.resourceCategories.show(params.outletId, params.id);
    const categories = await ResourcesService.childResourceCategories.list(params.id);
    const resources = await ResourcesService.resources.list(params.id);
    const mainCategory = { category: { id: result.data.id, name: result.data.name }, categories: [], resources: [] };
    categories.data.content.forEach((cat) => {
      mainCategory.categories.push({ id: cat.id, name: cat.name });
    });
    resources.data.content.forEach((res) => {
      mainCategory.resources.push({ id: res.id, name: res.name });
    });
    this.setState({ mainCategory });
  }

  handleChange(attribute, value) {
    this.setState({ [attribute]: value }, this.fetchResources);
  }

  handleAddCategory(categoryId) {
    console.log(categoryId);
  }

  handleAddResource() {
    this.setState({ toggleResourceModal: true });
  }

  handleToggleResourceModal() {
    this.setState(prevState => ({ toggleResourceModal: !prevState.toggleResourceModal }));
  }

  handleResourceNameChange(evt) {
    this.setState({ resourceName: evt.target.value });
  }

  handleResourceDescriptionChange(evt) {
    this.setState({ resourceDescription: evt.target.value });
  }

  handleResourceQuantityChange(evt) {
    this.setState({ resourceQuantity: evt.target.value });
  }

  handleResourceCostChange(evt) {
    this.setState({ resourceCost: evt.target.value });
  }

  handleResourceCostTypeChange(evt) {
    this.setState({ resourceCostType: { id: evt.target.value } });
  }

  async handleResourceSubmit() {
    const { params } = this.props.match;
    console.log("Submitting resource for category: ", params.id);
    this.handleToggleResourceModal();
    console.log({
      name: this.state.resourceName,
      description: this.state.resourceDescription,
      quantity: this.state.resourceQuantity,
      cost: this.state.resourceCost,
      resourceCategory: { id: params.id },
      costType: this.state.resourceCostType,
    });
    const result = await ResourcesService.resources.create(
      params.id,
      {
        name: this.state.resourceName,
        description: this.state.resourceDescription,
        quantity: this.state.resourceQuantity,
        cost: this.state.resourceCost,
        resourceCategory: { id: params.id },
        costType: this.state.resourceCostType,
      },
    );
    console.log(result);
    this.fetchResources();
  }

  renderResourceModal() {
    const { classes } = this.props;

    return (
      <Modal
        open={this.state.toggleResourceModal}
        size="md"
        onBackdropClick={this.handleToggleResourceModal}
      >
        <Modal.ModalHeader>Ajouter une ressource</Modal.ModalHeader>
        <Modal.ModalBody>
          <Grid container direction="column" spacing={2} className={classes.form}>
            <Grid item xs={12}>
              <TextField
                label="Nom"
                id="name-input"
                value={this.state.resourceName}
                onChange={this.handleResourceNameChange}
                className={classes.formInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                id="description-input"
                value={this.state.resourceDescription}
                onChange={this.handleResourceDescriptionChange}
                className={classes.formInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Quantité"
                id="quantity-input"
                type="number"
                value={this.state.resourceQuantity}
                onChange={this.handleResourceQuantityChange}
                className={classes.formInput}
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  step: "1",
                  min: "1",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Coût"
                id="cost-input"
                type="number"
                value={this.state.resourceCost}
                onChange={this.handleResourceCostChange}
                className={classes.formInput}
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  step: "0.01",
                  min: "0",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Type de coût"
                id="costType-input"
                select
                value={this.state.resourceCostType?.id || ""}
                onChange={this.handleResourceCostTypeChange}
                className={classes.formInput}
                SelectProps={{ native: true }}
              >
                <option value="" hidden />
                <option value="1">par heure (/h)</option>
                <option value="2">par gramme (/g)</option>
              </TextField>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2} justify="flex-end">
            <Grid item sm={12} md="auto">
              <Button onClick={this.handleToggleResourceModal} color="secondary">
                Annuler
              </Button>
            </Grid>
            <Grid item sm={12} md="auto">
              <Button onClick={this.handleResourceSubmit} color="primary">
                Sauvegarder
              </Button>
            </Grid>
          </Grid>
        </Modal.ModalBody>
      </Modal>
    );
  }

  render() {
    return (
      <React.Fragment>
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
            {this.state.mainCategory && (
              <React.Fragment>
                <CategoriesContainer
                  category={this.state.mainCategory.category}
                  categories={this.state.mainCategory.categories}
                  onAdd={this.handleAddCategory}
                />
                <ResourcesList
                  resources={this.state.mainCategory.resources}
                />
              </React.Fragment>
            )}
          </AppContent>
        </AppContainer>
        <Fab
          className={this.props.classes.fab}
          onClick={this.handleAddResource}
        >
          <AddIcon />
        </Fab>
        {this.renderResourceModal()}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Category);
