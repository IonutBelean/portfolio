import FooterCSS from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${FooterCSS.container}`}>
      &copy;
      <strong>{currentYear}</strong>&nbsp;Ioan&nbsp;
      <span>Belean</span>
    </div>
  );
};

export default Footer;
