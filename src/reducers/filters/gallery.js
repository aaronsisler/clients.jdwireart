const galleryFilterReducerDefaultState = {
  category: "ALL",
  text: ""
};

const galleryFilterReducer = (
  state = galleryFilterReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "SET_GALLERY_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_GALLERY_CATEGORY_FILTER":
      return {
        ...state,
        category: action.category
      };
    case "RESET_GALLERY_FILTERS":
      return galleryFilterReducerDefaultState;
    default:
      return state;
  }
};

export default galleryFilterReducer;
