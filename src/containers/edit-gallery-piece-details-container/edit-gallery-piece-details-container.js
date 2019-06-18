import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GalleryPieceForm from "../../components/gallery-piece-form";
import { startEditGalleryPiece } from "../../actions";
import "./edit-gallery-piece-details-container.scss";

class EditGalleryPieceDetailsContainer extends React.Component {
  handleSubmit = galleryPiece => {
    const { galleryPieceId } = this.props.galleryPiece;
    return this.props.startEditGalleryPiece(galleryPieceId, galleryPiece);
  };

  render() {
    return (
      <div className="edit-gallery-piece-details-container">
        <GalleryPieceForm
          galleryPiece={this.props.galleryPiece}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startEditGalleryPiece: (galleryPieceId, galleryPiece) =>
    dispatch(startEditGalleryPiece(galleryPieceId, galleryPiece))
});

EditGalleryPieceDetailsContainer.propTypes = {
  galleryPiece: PropTypes.object.isRequired,
  startEditGalleryPiece: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(EditGalleryPieceDetailsContainer);