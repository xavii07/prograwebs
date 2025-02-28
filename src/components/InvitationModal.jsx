import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { SENDER_MAIL } from "../consts/consts";
import { Toaster, toast } from "sonner";
import ButtonCom from "./Hero/Button";

export const InvitationModal = ({ setIsOpen }) => {
  const [datauser, setDataUser] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [isloading, setisloading] = useState(false);
  const { asunto, email, mensaje, nombre } = datauser;

  const handleInputChange = (e) => {
    setDataUser({
      ...datauser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    try {
      fetch(`https://formsubmit.co/ajax/${SENDER_MAIL}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(datauser),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          setDataUser({
            nombre: "",
            email: "",
            asunto: "",
            mensaje: "",
          });
          toast.success(
            "Mensaje enviado con éxito. Pronto nos pondremos en contacto contigo"
          );
          setisloading(false);
        });
    } catch (error) {
      toast.error("Error al enviar el mensaje. Por favor intente de nuevo");
      console.log(error);
    }
  };

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [setIsOpen]);

  return (
    <AnimatePresence>
      <Toaster richColors position="top-right" />
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-customDarkBgTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed, sm:mb-8 fixed mx-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative">
              <div className="w-1/2 hidden lg:inline">
                <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
                  ¿Te Interesa
                </h2>
                <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                  Nuestros Servicios?
                </h2>

                <ul className="mb-6 text-white mt-12">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>
                      ¿Le gustaría adquirir una pagina web para su negocio?
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>
                      ¿Le gustaría conversar sobre una solicitud especifica?
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>¿Le gustaría presentarnos ideas?</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
                <div className="flex inline, lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                  <div className="text-white mr-2 text-8xl">
                    <img
                      src="src/assets/images/logo.png"
                      alt="Logo Prograwebs"
                      style={{ height: "30px" }}
                    />
                  </div>
                  <div className="text-white font-['Inter'] font-bold text-3xl">
                    Prograwebs
                  </div>
                </div>

                <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center">
                  ¡CONTÁCTENOS!
                </h3>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full sm:w-4/5 p-2 mx-auto">
                    <form onSubmit={handleSubmit}>
                      <label className="mb-2 text-white">Nombre</label>
                      <input
                        className="px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 nombre "
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Juan Mendez"
                        required
                      />
                      <label className="mb-2 text-white">Correo</label>
                      <input
                        className="nombre px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="juan_mendez@gmail.com"
                        value={email}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="mb-2 text-white">Asunto</label>
                      <input
                        className="nombre px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="asunto"
                        id="asunto"
                        placeholder="Solicitud de Información o Cotización"
                        value={asunto}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="mb-2 text-white">Mensaje</label>
                      <textarea
                        style={{ height: "100px" }}
                        className="nombre px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 resize-none"
                        name="mensaje"
                        id="mensaje"
                        value={mensaje}
                        onChange={handleInputChange}
                        cols="30"
                        rows="20"
                        placeholder="Hola, me gustaría información sobre sus servicios..."
                        required
                      ></textarea>
                      <div className="w-full">
                        <ButtonCom text="Enviar Mensaje" type="submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
