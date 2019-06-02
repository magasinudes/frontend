import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { SearchInput, SelectInput } from "$common";

import styles from "./SearchBar.css";

const propTypes = {
  campusOptions: PropTypes.arrayOf(PropTypes.object),
  categoryOptions: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

const defaultProps = {
  campusOptions: null,
  categoryOptions: null,
  onChange: null,
};

const useStyles = makeStyles(styles);

const SearchBar = ({ campusOptions, categoryOptions, onChange }) => {
  const classes = useStyles();
  const [didMount, setDidMount] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [campus, setCampus] = useState("");
  const [categoryType, setCategoryType] = useState("");

  useEffect(() => {
    if (!didMount) {
      setDidMount(true);
    }
  }, []);

  useEffect(() => {
    if (didMount) {
      onChange("searchQuery", searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (didMount) {
      onChange("campusId", campus);
    }
  }, [campus]);

  useEffect(() => {
    if (didMount) {
      onChange("categoryTypeId", categoryType);
    }
  }, [categoryType]);

  return (
    <div className={classes.root}>
      <SearchInput className={classes.search} placeholder="Rechercher une ressource" onSearch={value => setSearchQuery(value)} />
      {campusOptions && (
        <SelectInput className={classes.selectCampus} value={campus} onChange={value => setCampus(value)}>
          <option hidden value="">Sélectionner le campus</option>
          {campusOptions.map(opt => (
            <option key={opt.id} value={opt.id}>{opt.text}</option>
          ))}
        </SelectInput>
      )}
      {categoryOptions && (
        <SelectInput value={categoryType} onChange={value => setCategoryType(value)}>
          <option hidden value="">Sélectionner le type de catégorie</option>
          {categoryOptions.map(opt => (
            <option key={opt.id} value={opt.id}>{opt.text}</option>
          ))}
        </SelectInput>
      )}
    </div>
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
