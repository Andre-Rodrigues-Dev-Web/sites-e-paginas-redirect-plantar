import { ContainerTopo } from "./style";
import Logo from "../../assets/imgs/Projeto_Plantar_LogoMarca.png";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
const Topo = () => {
  return (
    <ContainerTopo>
      <a href="/">
        <img src={Logo} alt="logo-plantar" />
      </a>
      <ul className="redes-sociais">
        <a href="" title="Clique para visualizar nossa página no Facebook">
          <IoLogoFacebook size={20} />
        </a>
        <a href="" title="Clique para visualizar nosso perfil no Instagram">
          <IoLogoInstagram size={20} />
        </a>
      </ul>
    </ContainerTopo>
  );
};

export default Topo;
