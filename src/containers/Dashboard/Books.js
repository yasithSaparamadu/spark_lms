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

  const handleRowClick = (id) => {
    console.log(id);
  };
  return (
    <FluidContainer>
      <Table
        data={updatedCatalog}
        handleRowClick={handleRowClick}
        instruction="Click row to view book"
      />
    </FluidContainer>
  );
};

export default Books;
