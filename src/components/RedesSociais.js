import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";

const RedesSociais = ({ iconSize }) => {
  return (
    <div className="flex gap-3">
      <a
        href="https://api.whatsapp.com/send/?phone=5561998576920"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp size={iconSize} color="#fff" />
      </a>
      <a
        href="https://www.instagram.com/ivanetedds"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram size={iconSize} color="#fff" />
      </a>
      <a
        href="https://www.facebook.com/ivanete.santos.399"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook size={iconSize} color="#fff" />
      </a>
    </div>
  );
};

export default RedesSociais;
