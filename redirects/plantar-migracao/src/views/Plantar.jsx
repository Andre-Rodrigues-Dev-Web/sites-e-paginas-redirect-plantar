import React from "react";
import { Content, ContainerText } from "./style";
import ImagemSustentabilidade from "../assets/imgs/sustentabilidade-lalan-do-brasil.png";
import Contatos from "../Components/Contatos";
import Seo from "../Components/Seo";

const Plantar = () => {
  return (
    <Content>
      <Seo 
        TitleSite="Projeto Plantar" 
        KeywordsSite="Plantar, Sustentabilidade, Migracao"
        DescriptionSite="Projeto Plantar - Plante sua primeira arvore, e contribua com o meio ambiente, participe!"
        Author="Velance"
        urlPlantar="https://www.projetoplantar.com.br"
      />
      <div className="container-plantar">
        <div className="row">
          <div className="col-6">
            <ContainerText>
              <h1>No momento estamos migrando nosso site</h1>
              <hr />
              <Contatos />
            </ContainerText>
          </div>
          <div className="col-6">
            <img src={ImagemSustentabilidade} alt="Sustentabilidade" />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Plantar;
