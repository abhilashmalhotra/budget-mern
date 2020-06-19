export default (state, action) => {
  switch (action.type) {
    case "LOADING_START":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_END":
      return {
        ...state,
        loading: false,
      };
    case "GET_TRANSACTION":
      return {
        ...state,
        transactions: action.payload,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "ERROR_TRANSACTION":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
