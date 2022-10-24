import ContactsCSS from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div
      className={`${ContactsCSS.wrapper} d-flex flex-column justify-content-center align-items-center`}
    >
      <a href="https://github.com/IonutBelean" target="_blank">
        <img
          src="/contact/github-contact.PNG"
          alt="Github."
          className={`${ContactsCSS.img1}`}
        />
      </a>
      <a href="https://www.instagram.com/ionut.belean" target="_blank">
        <img
          src="/contact/instagram.PNG"
          alt="Github."
          className={`${ContactsCSS.img2}`}
        />
      </a>
      <a href="https://www.facebook.com/ionutbelean91" target="_blank">
        <img
          src="/contact/facebook.PNG"
          alt="Github."
          className={`${ContactsCSS.img3}`}
        />
      </a>
      <div className={`${ContactsCSS.line}`}></div>
    </div>
  );
};

export default Contacts;
