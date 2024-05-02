import React from "react";
import { ContainerFooter } from "./style";

const Footer = () => {
  return (
    <ContainerFooter>
      <p>
        &copy; Todos Direitos Reservados <span>Plantar</span> - ano: {new Date().getFullYear()} |
        Desenvolvido com <span className="heart">❤️</span> por:
        <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"> Velance</a>
      </p>
    </ContainerFooter>
  );
};

export default Footer;
