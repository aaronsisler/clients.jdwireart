import PropTypes from "prop-types";

export default {
  description: PropTypes.string,
  galleryPieceId: PropTypes.string.isRequired,
  height: PropTypes.string,
  isPaypalActive: PropTypes.bool,
  isSold: PropTypes.bool,
  length: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  width: PropTypes.string
};
