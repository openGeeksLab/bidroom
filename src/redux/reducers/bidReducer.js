function bidReducer(state = {}, action) {
  switch (action.type) {

    case 'RAICE_BID': {
      return {
        ...action
      };
    }
    default: {
      return state;
    }
  }
}

export default bidReducer;
