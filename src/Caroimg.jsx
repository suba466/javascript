function Caroimg({ src, alt }) {
  return (
    <>
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={{
        objectFit: "cover",
        maxHeight: "700px"  
      }}
    />
   
    </>
    
  );
}

export default Caroimg;
