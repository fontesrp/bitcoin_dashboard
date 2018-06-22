const createReducer = function (initialState, handlers) {

  const reducer = function (state = initialState, action) {
    return (handlers.hasOwnProperty(action.type))
      ? handlers[action.type](state, action)
      : state;
  };

  return reducer;
};

export default createReducer;
