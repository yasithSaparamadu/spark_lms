import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";

import { getBook } from "../../api/bookAPI";
import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../components/CommonComponents";
import  Spinner  from "../../components/Spinner";

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getBook(id)
      .then((response) => {
        if (!response.error) {
          setBook(response.data);
        }
      })

      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Container>
      <Button onClick={handleBackClick}>
        <IoReturnUpBack />
      </Button>
      {!isLoading && book !== null ? (
        <FlexRow>
          <ContainerInline>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>
              Lhgahsd hgadfh hjgaf hgafs hgs, uhgasdm hgasd jahsdj jhas kjjsd
              llsd dawid sadwd aswff f.,con asdk asdiw ddsw ald.
            </p>
            {book.isAvailable ? (
              ""
            ) : (
              <>
                <h4>{`Borrowed by: ${book.borrowedMemberId}`}</h4>
              </>
            )}
          </ContainerInline>
        </FlexRow>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Book;
