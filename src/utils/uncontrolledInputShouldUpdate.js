import shallowEqual from "$utils/shallowEqual";

export default function uncontrolledInputShouldUpdate(props, state, nextProps, newState) {
  /* eslint-disable max-len */
  //
  // This ignores props change to value and onChange
  // If you want to change value create a ref and call setValue
  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#alternative-2-reset-uncontrolled-component-with-an-instance-method
  //
  /* eslint-enable */

  const {
    value: newPropValue,
    onChange: newPropOnChange,
    ...newProps
  } = nextProps;

  const {
    value: oldPropValue,
    onChange: oldPropOnChange,
    ...oldProps
  } = props;

  const oldState = state;

  return (
    !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
  );
}
