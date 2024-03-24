import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const InvitationModal = ({ setIsOpen }) => {
  const [datauser, setDataUser] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const { asunto, email, mensaje, nombre } = datauser;

  const handleInputChange = (e) => {
    setDataUser({
      ...datauser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("https://formsubmit.co/ajax/segundo.gaspata8420@utc.edu.ec", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(datauser),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log("Mensaje enviado");
        });
    } catch (error) {
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
                    <span>Me gustaria adquirir una pagina para mi negocio</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>
                      Le gustaria conversar sobre una solicitud especifica
                    </span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Le gustaria presentarnos ideas</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
                <div className="flex inline, lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                  <div className="text-white mr-2 text-8xl">
                    <img
                      src="src/assets/images/logo.png"
                      alt=""
                      style={{ height: "30px" }}
                    />
                  </div>
                  <div className="text-white font-['Inter'] font-bold text-3xl">
                    Prograwebs
                  </div>
                </div>

                <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center">
                  ¡CONTACTANOS!
                </h3>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full sm:w-4/5 p-2 mx-auto">
                    <form onSubmit={handleSubmit}>
                      <label className="letters">Nombre</label>
                      <input
                        className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 nombre"
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre Completo"
                        required
                      />
                      <label className="letters">Correo</label>
                      <input
                        className="nombre px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Dirección de Email"
                        value={email}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="letters">Asunto</label>
                      <input
                        className="nombre px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        type="text"
                        name="asunto"
                        id="asunto"
                        placeholder="Tema..."
                        value={asunto}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="letters">Mensaje</label>
                      <textarea
                        style={{ height: "100px" }}
                        className="nombre px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                        name="mensaje"
                        id="mensaje"
                        value={mensaje}
                        onChange={handleInputChange}
                        cols="30"
                        rows="10"
                        placeholder="Tu Mensaje..."
                        required
                      ></textarea>
                      <div className="flex justify-center">
                        <button
                          className="py-4 px-6 flex items-center justify-center text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7274f3] transition ease-in-out duration-200"
                          type="submit"
                        >
                          CONTACTAR
                          <svg
                            data-slot="icon"
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="h-5 w-5 ml-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            ></path>
                          </svg>
                        </button>
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
