import ContactsCSS from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div
      className={`${ContactsCSS.wrapper} d-flex flex-column justify-content-center align-items-center`}
    >
      <a href="https://github.com/IonutBelean" target="_blank" rel="noreferrer">
        <img
          src="/contact/github-contact.PNG"
          alt="Github."
          className={`${ContactsCSS.img1}`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ioan-belean/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/contact/linkedin.png"
          alt="LinkedIn."
          className={`${ContactsCSS.img2}`}
        />
      </a>
      <a
        href="https://www.instagram.com/ionut.belean"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/contact/instagram.PNG"
          alt="Instagram."
          className={`${ContactsCSS.img3}`}
        />
      </a>
      <a
        href="https://www.facebook.com/ionutbelean91"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/contact/facebook.PNG"
          alt="Facebook."
          className={`${ContactsCSS.img4}`}
        />
      </a>

      <div className={`${ContactsCSS.line}`}></div>
    </div>
  );
};

export default Contacts;
