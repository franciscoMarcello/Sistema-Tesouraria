const INITIAL_STATE = {
  usuarioName: "",
  usuarioLogado: 0,
};

function usuarioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        usuarioLogado: 1,
        usuarioName: action.usuarioName,
      };
    case "LOG_OUT":
      return {
        ...state,
        usuarioLogado: 0,
        usuarioName: "",
      };
    default:
      return state;
  }
}
export default usuarioReducer;
