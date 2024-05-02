import { IoLogoWhatsapp } from "react-icons/io";
import{
  WhatsAppButton
} from './style'

const WhatsAppButtonComponent = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <WhatsAppButton href={whatsappUrl} target="_blank">
      <IoLogoWhatsapp />
      Enviar mensagem
    </WhatsAppButton>
  );
};

const Contatos = () => {
  return (
    <>
      <h2>Contato para dúvidas e outras informações</h2>
      <p>
        <strong>Email:</strong> contato@carbonoreduzido.com.br
      </p>
      <p>
        <strong>Telefone:</strong> +55 (37) 3431-2344
      </p>
      <WhatsAppButtonComponent />
    </>
  );
};

export default Contatos;