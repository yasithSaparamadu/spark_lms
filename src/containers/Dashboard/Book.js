import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";

import styled from "styled-components";
import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../components/CommonComponents";
import Spinner from "../../components/Spinner";

import { getBook } from "../../api/bookAPI";
import BookCoverPlaceHolder from "../../shared/bookcover.png";

const ContainerInlineTextAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const H1 = styled.h1`
  text-align: left;
`;

const H2 = styled.h2`
  text-align: left;
`;

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
      <Button onClick={handleBackClick} size={1.5}>
        <IoReturnUpBack />
      </Button>
      {!isLoading && book !== null ? (
        <>
          <FlexRow>
            <ContainerInlineTextAlignLeft>
              <H1>{book.title}</H1>
              <H2>{`by ${book.author}`}</H2>
              <p>
                Lhgahsd hgadfh hjgaf hgafs hgs, uhgasdm hgasd jahsdj jhas kjjsd
                llsd dawid sadwd aswff f.,con asdk asdiw ddsw ald.
              </p>
              {book.isAvailable ? (
                ""
              ) : (
                <>
                  <h4>{`Borrowed by: ${book.borrowedMemberId}`}</h4>
                  <h4>{`Borrowed date: ${book.borrowedDate}`}</h4>
                </>
              )}
            </ContainerInlineTextAlignLeft>
            <ContainerInline>
              <img
                src={BookCoverPlaceHolder}
                alt="Book Cover Placeholder"
                style={{ border: "1px solid black" }}
              />
            </ContainerInline>
          </FlexRow>
          <FlexRow>
            {book.isAvailable ? (
              <>
                <Button onClick={() => console.log("Call lend API")}>
                  Lend
                </Button>
                <Button
                  danger
                  onClick={() => console.log("Call delete book API")}
                >
                  Delete
                </Button>
              </>
            ) : (
              <>
                <h4>{`Borrowed by: ${book.borrowedMemberId}`}</h4>
                <h4>{`Borrowed date: ${book.borrowedDate}`}</h4>
                <Button onClick={() => console.log("Call lend API")}>
                  Return
                </Button>
              </>
            )}
          </FlexRow>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Book;
