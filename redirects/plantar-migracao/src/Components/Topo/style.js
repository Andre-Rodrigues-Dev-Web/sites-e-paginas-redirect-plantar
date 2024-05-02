import styled from "styled-components";

const ContainerTopo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto 1rem auto;
  padding: 10px 0;
  .redes-sociais{
    display: flex;
    flex-direction: row;
    a{
      color: #333;
      margin: 0 10px;
    }
  }
  @media(min-width: 768px){
    min-width: 90%;
    max-width: 90%;
    a{
      img{
        width: 70%;
      }
    }
  }
`;

export{
    ContainerTopo
}