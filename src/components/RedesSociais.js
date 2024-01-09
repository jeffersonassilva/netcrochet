import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";

const RedesSociais = ({ iconSize, color }) => {
  return (
    <div className="flex gap-3 w-full justify-end items-center">
      <div className={`text-[${color}] text-sm flex-1 hidden md:block md:text-yellow-900`}>&copy; 2024 :: NetCrochet</div>
      <div className={`text-[${color}] text-sm flex-1 md:flex-none md:text-base`}>Me siga nas redes sociais.</div>
      <a
        href="https://api.whatsapp.com/send/?phone=5561998576920"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp size={iconSize} color={color} />
      </a>
      <a
        href="https://www.instagram.com/ivanetedds"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram size={iconSize} color={color} />
      </a>
      <a
        href="https://www.facebook.com/ivanete.santos.399"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook size={iconSize} color={color} />
      </a>
    </div>
  );
};

export default RedesSociais;
