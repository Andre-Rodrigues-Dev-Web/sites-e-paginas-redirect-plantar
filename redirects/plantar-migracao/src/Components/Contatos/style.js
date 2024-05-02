import styled from 'styled-components';

const WhatsAppButton = styled.a`
  background-color: #25d366;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
  min-width: 150px;
  max-width: 190px;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #128c7e;
  }
  @media(min-width: 768px) {
    font-size: 18px;
    min-width: 200px;
    max-width: 250px;
  }
`;

export{
    WhatsAppButton
}