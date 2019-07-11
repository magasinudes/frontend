import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import {
  AppContainer,
  AppContent,
  Modal,
} from "$common";
import { ResourcesService } from "$services/microservices";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

import SearchBar from "../SearchBar";
import CategoriesContainer from "../CategoriesContainer";

import styles from "./Home.css";

class Home extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      campusId: "",
      categoryTypeId: "",
      outlets: null,
      toggleOutletModal: false,
      outletName: "",
      outletOpenTime: null,
      outletCloseTime: null,
      toggleCategoryModal: false,
      categoryOutletIdInCreation: "",
      categoryName: "",
      categoryDescription: "",
      categoryType: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddOutlet = this.handleAddOutlet.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleToggleOutletModal = this.handleToggleOutletModal.bind(this);
    this.handleToggleCategoryModal = this.handleToggleCategoryModal.bind(this);
    this.handleOutletSubmit = this.handleOutletSubmit.bind(this);
    this.handleOutletNameChange = this.handleOutletNameChange.bind(this);
    this.handleOutletHoursChange = this.handleOutletHoursChange.bind(this);
    this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleCategoryDescriptionChange = this.handleCategoryDescriptionChange.bind(this);
    this.handleCategoryTypeChange = this.handleCategoryTypeChange.bind(this);
  }

  componentDidMount() {
    this.fetchResources();
  }

  async fetchResources() {
    console.log("Fetching resources...", this.state);
    console.log(ResourcesService);
    const result = await ResourcesService.outlets.list();
    const categories = await Promise.all(result.data.content.map(o => ResourcesService.resourceCategories.list(o.id)));
    // const categories = await ResourcesService.resourceCategories.list(result.data.content[0].id);
    const outlets = [];
    result.data.content.forEach((o) => {
      outlets.push({ outlet: { id: o.id, name: o.name }, categories: [] });
    });
    // const test = [{ outlet: { id: result.data.content[0].id, name: result.data.content[0].name }, categories: [] }];
    categories.forEach((cat, index) => {
      cat.data.content.forEach((content) => {
        outlets[index].categories.push({ id: content.id, name: content.name });
      });
    });
    // categories.data.content.forEach((cat) => {
    //   test[0].categories.push({ id: cat.id, name: cat.name });
    // });
    console.log(outlets);
    this.setState({ outlets });
  }

  handleChange(attribute, value) {
    this.setState({ [attribute]: value }, this.fetchResources);
  }

  handleAddOutlet() {
    console.log("Pop outlet creation modal");
    this.setState({ toggleOutletModal: true });
  }

  handleAddCategory(outletId) {
    console.log("Pop category creation modal for outlet: ", outletId);
    this.setState({ toggleCategoryModal: true, categoryOutletIdInCreation: outletId });
  }

  handleToggleOutletModal() {
    this.setState(prevState => ({ toggleOutletModal: !prevState.toggleOutletModal }));
  }

  handleToggleCategoryModal() {
    this.setState(prevState => ({ toggleCategoryModal: !prevState.toggleCategoryModal }));
  }

  async handleOutletSubmit() {
    console.log("Submitting...");
    this.handleToggleOutletModal();
    const result = await ResourcesService.outlets.create({
      name: this.state.outletName,
      openTime: this.state.outletOpenTime.format("HH:mm:00"),
      closeTime: this.state.outletCloseTime.format("HH:mm:00"),
    });
    this.setState({
      outletName: "",
      closeTime: null,
      openTime: null,
    });
    console.log(result);
    this.fetchResources();
  }

  handleOutletNameChange(evt) {
    this.setState({ outletName: evt.target.value });
  }

  handleOutletHoursChange(type, time) {
    switch (type) {
      case "open":
        this.setState({ outletOpenTime: time });
        break;
      case "close":
        this.setState({ outletCloseTime: time });
        break;
    }
  }

  async handleCategorySubmit() {
    console.log("Submitting new category...");
    this.handleToggleCategoryModal();
    console.log({
      name: this.state.categoryName,
      description: this.state.categoryDescription,
      type: this.state.categoryType,
    });
    const result = await ResourcesService.resourceCategories.create(
      this.state.categoryOutletIdInCreation,
      {
        name: this.state.categoryName,
        description: this.state.categoryDescription,
        type: this.state.categoryType,
      },
    );
    this.setState({
      categoryName: "",
      categoryDescription: "",
      categoryType: null,
    });
    console.log(result);
    this.fetchResources();
  }

  handleCategoryNameChange(evt) {
    this.setState({ categoryName: evt.target.value });
  }

  handleCategoryDescriptionChange(evt) {
    this.setState({ categoryDescription: evt.target.value });
  }

  handleCategoryTypeChange(evt) {
    this.setState({ categoryType: { id: evt.target.value } });
  }

  renderOutletModal() {
    const { classes } = this.props;

    return (
      <Modal
        open={this.state.toggleOutletModal}
        size="md"
        onBackdropClick={this.handleToggleOutletModal}
      >
        <Modal.ModalHeader>Ajouter un point de vente</Modal.ModalHeader>
        <Modal.ModalBody>
          <Grid container direction="column" spacing={2} className={classes.form}>
            <Grid item xs={12}>
              <TextField
                label="Nom"
                id="name-input"
                value={this.state.outletName}
                onChange={this.handleOutletNameChange}
                className={classes.formInput}
              />
            </Grid>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid item xs={12}>
                <KeyboardTimePicker
                  margin="normal"
                  id="open-time"
                  label="Heure d'ouverture"
                  value={this.state.outletOpenTime}
                  onChange={time => this.handleOutletHoursChange("open", time)}
                  className={classes.formInput}
                />
              </Grid>
              <Grid item xs={12}>
                <KeyboardTimePicker
                  margin="normal"
                  id="close-time"
                  label="Heure de fermeture"
                  value={this.state.outletCloseTime}
                  onChange={time => this.handleOutletHoursChange("close", time)}
                  className={classes.formInput}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid container direction="row" spacing={2} justify="flex-end">
            <Grid item sm={12} md="auto">
              <Button onClick={this.handleToggleOutletModal} color="secondary">
                Annuler
              </Button>
            </Grid>
            <Grid item sm={12} md="auto">
              <Button onClick={this.handleOutletSubmit} color="primary">
                Sauvegarder
              </Button>
            </Grid>
          </Grid>
        </Modal.ModalBody>
      </Modal>
    );
  }

  renderCategoryModal() {
    const { classes } = this.props;

    return (
      <Modal
        open={this.state.toggleCategoryModal}
        size="md"
        onBackdropClick={this.handleToggleCategoryModal}
      >
        <Modal.ModalHeader>Ajouter une catégorie de ressources</Modal.ModalHeader>
        <Modal.ModalBody>
          <Grid container direction="column" spacing={2} className={classes.form}>
            <Grid item xs={12}>
              <TextField
                label="Nom"
                id="name-input"
                value={this.state.categoryName}
                onChange={this.handleCategoryNameChange}
                className={classes.formInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                id="description-input"
                value={this.state.categoryDescription}
                onChange={this.handleCategoryDescriptionChange}
                className={classes.formInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Type"
                id="type-input"
                select
                value={this.state.categoryType?.id || ""}
                onChange={this.handleCategoryTypeChange}
                className={classes.formInput}
                SelectProps={{ native: true }}
              >
                <option value="" hidden />
                <option value="1">Consommable</option>
                <option value="2">Réservable</option>
                <option value="3">Empruntable</option>
              </TextField>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2} justify="flex-end">
            <Grid item sm={12} md="auto">
              <Button onClick={this.handleToggleCategoryModal} color="secondary">
                Annuler
              </Button>
            </Grid>
            <Grid item sm={12} md="auto">
              <Button onClick={this.handleCategorySubmit} color="primary">
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
            {this.state.outlets && (
              this.state.outlets.map(o => (
                <CategoriesContainer
                  key={o.outlet.id}
                  outlet={o.outlet}
                  categories={o.categories}
                  onAdd={this.handleAddCategory}
                />
              ))
            )}
          </AppContent>
        </AppContainer>
        <Fab
          className={this.props.classes.fab}
          onClick={this.handleAddOutlet}
        >
          <AddIcon />
        </Fab>
        {this.renderOutletModal()}
        {this.renderCategoryModal()}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
