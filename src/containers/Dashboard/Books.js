import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
  const updatedCatalog = [
    ...catalog,
    {
      author: "Yasih Saparamadu",
      burrowedDate: "",
      burrowedMemberId: "",
      id: "3",
      isAvailable: true,
      title: "React Development 2021",
    },
  ];
  return (
    <FluidContainer>
      <Table data={updatedCatalog} />
    </FluidContainer>
  );
};

export default Books;
