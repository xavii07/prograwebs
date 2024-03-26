import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";

const testimonialsData = [
  {
    customerTitle: "Acerca de Nosotros",
    content:
      " En Prograwebs buscamos transformar ideas en realidad digital. Fusionamos funcionalidad y estética para crear experiencias impactantes. Impulsamos el éxito en línea de nuestros clientes. Únete a nosotros para crear el futuro en cada clic.",
  },
  {
    customerTitle: "Mision",
    content:
      "En Prograwebs, nuestra misión es transformar ideas en experiencias digitales innovadoras, brindando soluciones en el desarrollo de páginas, aplicaciones y sitios web que impulsen el crecimiento y la presencia en línea de nuestros clientes.",
  },
  {
    customerTitle: "Vision",
    content:
      "Ser reconocidos como líderes en el desarrollo web, destacándonos por nuestra creatividad, eficiencia y compromiso con la excelencia, contribuyendo al éxito continuo de nuestros clientes en un mundo digital en constante evolución.",
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Acerca de Nosotros
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          PROGRA<span className="text-customSecondary">WEBS</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="custom-content-text-gray">
                {testimonial.customerTitle}
              </div>
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white text-justify">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
