import { FC } from "react";
import emailjs from "@emailjs/browser";


export const ContactView: FC = () => {
  const sendEmail = (event:any) => {
    event.preventDefault(); 
    
    emailjs
      .sendForm(
        'service_e9w40z4',
        'template_kczm2zf',
        event.target,
        'HDybYMHAualEHKSNH'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div
      className="mt-8 min-h-custom snap-center justify-start flex items-center flex-col h-auto max-w-screen-2xl mx-auto text-white"
    >
      <div className="justify-center flex items-center flex-col title-section">
        <div className="text-center uppercase text-5xl md:text-6xl font-bold title">
          CONTACTO
        </div>
        <hr className=" w-10 h-2 my-3 rounded-xl  bg-yellow-400" />
        <div className="text-center   max-w-5xl text-xl mx-auto subtitle">
          No dude en ponerse en contacto conmigo enviando el siguiente
          formulario y me pondré en contacto con usted lo antes posible
        </div>
      </div>
      <form className="max-w-5xl w-full" onSubmit={sendEmail}>
        <div className="flex flex-col gap-2 name">
          <label htmlFor="name">Nombre</label>
          <input
            className="h-11 text-primary rounded px-2"
            type="text"
            name="user_name"
            id="name"
            maxLength={50}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="flex mt-4 flex-col gap-2 email">
          <label htmlFor="email">Email</label>
          <input
            className="h-11 text-primary rounded px-2"
            type="email"
            name="user_email"
            id="email"
            maxLength={50}
            placeholder="Ingrese su email"
          />
        </div>
        <div className="flex mt-4 flex-col gap-2 message">
          <label htmlFor="user_message">Mensaje</label>
          <textarea
            placeholder="Ingrese su mensaje"
            className="p-2 text-black rounded"
            name="message"
            id="message"
            cols={30}
            rows={10}
          />
        </div>

        <button className="mx-auto w-44 h-12  mt-12 transition ease-in-out duration-500 hover:-translate-y-1 hover:shadow flex justify-center text-center uppercase font-bold items-center rounded text-primary bg-yellow-400 cursor-pointer button">enviar</button>
      </form>
    </div>
  );
};

export default ContactView;
