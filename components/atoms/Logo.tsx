import Image from "next/image";

const Logo = () => {
  return (
    <div className="responsive-image-container">
      <Image
        src="/PSF.png"
        className="img-fluid"
        height={50}
        width={150}
        alt="Test"
        layout="responsive-md"
      />
    </div>
  );
};

export default Logo;
