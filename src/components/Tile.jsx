
// eslint-disable-next-line react/prop-types
function Tile({ image, imgDescription, title, children }) {
  console.log(image, imgDescription, title, children)
  return (
    <section>
      {image && <img src={image} alt={imgDescription} />}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Tile;
//export default Tile