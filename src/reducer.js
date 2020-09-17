export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finished developing...
  token:
    "BQDp-QoEUkkVo-f03sTdcDmeswWIIZ5W5Fl9waC5bFWjj-nAkju3ujpxoPYYSPeqF6tG1Uue9meNe7KLBH11KUgSHyzZmv6Rbm238D8qeg0KEr2riRvqmsLEOaPjSaql206P6QCCL6s1L9B5tEMoOAOMfNcVeTGOVON2dB84MuM8fTuV",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> has a type(SET_USER), [payload](user)

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
