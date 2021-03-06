// Filters gallery pieces having an image source and then by matching their category and name
export default (gallery, { category = "ALL", text = "" }) =>
  gallery.filter(galleryPiece => {
    if (!galleryPiece.imageSrc) {
      return false;
    }
    const matchesCategory =
      category === "ALL" || galleryPiece.category === category;
    const includesText = galleryPiece.name
      .toLowerCase()
      .includes(text.toLowerCase());

    return matchesCategory && includesText;
  });
