import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import ButtonCom from "./Hero/Button";
import ButtonEnlace from "./Hero/ButtonEnlace";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="inicio"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 place-items-center lg:place-items-stretch">
        <div className="md:w-[800px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-customGrayText text-sm sm:text-base  mb-6 sm:mt-32 mt-16">
              Código hecho a medida para tu éxito en la Web
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
              <h1 className="inline md:hidden">
                PROGRA<span className="text-customSecondary">WEBS</span>
              </h1>
              <h1 className="hidden md:inline">
                PROGRA<span className="text-customSecondary">WEBS</span>
              </h1>
            </div>
            <div className="mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-20 md:px-24 lg:px-24"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-2 px-12 sm:px-48 ">
              Impulsamos el éxito en línea de nuestros clientes. Únete a
              nosotros para crear el futuro en cada clic.
            </div>
            <br />
            <br />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
              <ButtonEnlace
                href="https://api.whatsapp.com/send?phone=593992072597&text=Saludos%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios%20de%20desarrollo%20web."
                text="Contactar por WhatsApp"
              />

              <ButtonCom
                text="Enviar Mensaje"
                setIsModalOpen={() => setIsModalOpen(true)}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex justify-center items-center "
        >
          <img
            src="src/assets/images/fondo.webp"
            alt="Fondo Prograwebs"
            className="w-3/6 fondo_prograwebs"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="hidden absolute w-screen lg:flex justify-center">
            <img
              src="src/assets/images/image-18.webp"
              alt="Interior Diseño"
              style={{ height: "560px" }}
              className="w-4/5 2xl:w-[1200px] mx-auto absolute rounded-xl custom-border-gray hero-dashboard-border-gradient opacity-50 scale-95 hover:opacity-100 hover:scale-100 hover:transition-all"
            />
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center col-span-2">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
