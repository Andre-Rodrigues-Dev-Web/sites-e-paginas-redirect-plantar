import styled from "styled-components";

const Content = styled.div`
  margin: 0 auto;
  .container-plantar{
    padding: 20px 0;
    @media(min-width: 768px) {
      padding: 20px 0;
      img{
        width: 97%;
      }
    }
  }
  .row {
    display: flex;
    flex-direction: column;
    [class*="col-"] {
      padding: 15px;
    }
  }
  @media (min-width: 768px) {
    max-width: 768px;
    .row {
      flex-direction: row;
      .col-1 {
        width: 8.33%;
      }
      .col-2 {
        width: 16.66%;
      }
      .col-3 {
        width: 25%;
      }
      .col-4 {
        width: 33.33%;
      }
      .col-5 {
        width: 41.66%;
      }
      .col-6 {
        width: 50%;
      }
      .col-7 {
        width: 58.33%;
      }
      .col-8 {
        width: 66.66%;
      }
      .col-9 {
        width: 75%;
      }
      .col-10 {
        width: 83.33%;
      }
      .col-11 {
        width: 91.66%;
      }
      .col-12 {
        width: 100%;
      }
    }
  }
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 0 20px;
  @media(min-width: 768px) {
    max-width: 768px;
    h1{
      line-height: 32px;
    }
    h2{
      line-height: 25px;
    }
    hr{
      background-color: #000;
      line-height: 20px;
    }
  }
`;

export { Content, ContainerText };
