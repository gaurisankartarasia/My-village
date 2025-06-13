import React from "react";
import Kings from "@/components/kings";
import { Helmet } from "@dr.pogodin/react-helmet";

const KingsPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Former kings or rulers of Badamba</title>
        <meta name="description" content="Former kings or rulers of Badamba" />
      </Helmet>
      <Kings />
    </div>
  );
};

export default KingsPage;
