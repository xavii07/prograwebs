import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Paginas Estáticas y Dinámicas
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                ¡Transforma tu presencia{" "}
                <span className="text-customSecondary">en la Web!</span>
              </h2>

              <p
                className="mb-10 text-customGrayText leading-loose"
                style={{ textAlign: "justify" }}
              >
                Déjanos crear una experiencia web cautivadora y personalizada
                para tu negocio. Descubre cómo nuestras páginas web atractivas
                pueden impulsar tu presencia en línea y cautivar a tus
                visitantes desde el primer clic.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Diseño minimalista y atractivo</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Experiencia de usuario intuitiva</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Adaptable a cualquier tamaño de pantalla</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src="src/assets/images/astra.webp"
                  alt="Proyecto Astra"
                  className="rounded-xl custom-border-gray mx-auto sm:mx-unset opacity-50 scale-95 hover:opacity-100 hover:scale-100 hover:transition-all"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src="src/assets/images/image-20.webp"
                  alt="Proyecto Experiencia"
                  className="rounded-xl custom-border-gray opacity-50 scale-95 hover:opacity-100 hover:scale-100 hover:transition-all"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src="src/assets/images/image-33.webp"
                  alt="Proyecto Sala"
                  className="rounded-xl custom-border-gray opacity-50 scale-95 hover:opacity-100 hover:scale-100 hover:transition-all"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded">
                <img
                  src="src/assets/images/hestia.webp"
                  alt="Proyecto Hestia"
                  className="rounded-xl custom-border-gray mx-auto sm:mx-unset opacity-50 scale-95 hover:opacity-100 hover:scale-100 hover:transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
