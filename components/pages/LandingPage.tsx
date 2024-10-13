"use client";

import React from "react";
import Layout from "../organisms/Layout";
import Hero from "../organisms/Hero";
import style from "./LandingPage.module.scss";
import Prompt from "../atoms/Prompt";

const LandingPage = () => {
  return (
    <>
      <div className={` ${style.main} py-2 position-relative`}>
        <Layout>
          <Hero />
        </Layout>
      </div>
    </>
  );
};

export default LandingPage;
