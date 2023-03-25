function Title({ header, span }) {
  return (
    <div className="section-title">
      <h2>
        {header} <span>{span}</span>
      </h2>
    </div>
  );
}
export default Title;
