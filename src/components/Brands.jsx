import { motion } from "framer-motion";
import JavaScript from "../assets/logos/Javascript";
import Python from "../assets/logos/Python";
import MongoDb from "../assets/logos/Mongodb";
import MysqlDb from "../assets/logos/Mysql";
import NodeJs from "../assets/logos/Nodejs";
import React from "../assets/logos/React";
import Dotnet from "../assets/logos/Dotnet";
import PostgreSql from "../assets/logos/Postgresql";
import Wordpress from "../assets/logos/Wordpress";
import Css3 from "../assets/logos/Css3";
import Html5 from "../assets/logos/Html5";
import Nest from "../assets/logos/Nestjs";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-1">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Tecnologías
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                que utilizamos
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[720px] mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap">
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <JavaScript />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex  justify-center">
                <Python />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex  justify-center">
                <MongoDb />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <MysqlDb />
              </div>

              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <NodeJs />
              </div>
              <div className="w-1/2 sm:w-1/4  py-6 flex  justify-center">
                <React />
              </div>
              <div className="w-1/2 sm:w-1/4  py-6 flex  justify-center">
                <Dotnet />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <PostgreSql />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <Wordpress />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <Css3 />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <Html5 />
              </div>
              <div className="w-1/2 sm:w-1/4 py-6 flex justify-center">
                <Nest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
