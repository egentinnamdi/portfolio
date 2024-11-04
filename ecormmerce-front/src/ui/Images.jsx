function Images({ imgName, top, left }) {
  return (
    <img
      src={`${imgName}.png`}
      alt={`${imgName}`}
      className="absolute h-10 w-10 object-contain transition-all duration-1000 ease-in-out lg:h-14 lg:w-14"
      style={{ left: `${left}%`, top: `${top}%` }}
    />
  );
}

export default Images;
