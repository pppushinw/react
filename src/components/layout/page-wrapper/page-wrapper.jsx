import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import {PageWrapperMain} from "./style";
import features from "../../../mocks/features";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <PageWrapperMain>
        <MainPage features={features} />
      </PageWrapperMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
