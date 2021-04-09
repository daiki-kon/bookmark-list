/* eslint-disable max-len */
import React, { FC } from 'react';
import { Image, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

export type PreviewUrlBoxProps = {
  siteUrl: string;
  imageUrl?: string;
  title?: string;
  isFetching: boolean;
}

const StyledDiv = styled.div`
  width: 150px !important;
  position: relative;
`;

const StyledTitle = styled.p`
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  font-weight: bold;
`;

const StyledLink = styled.a`
  /*  親のDivにリンクを設定 */
  display: block;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;

export const PreviewUrlBox: FC<PreviewUrlBoxProps> = (props) => {
  const {
    siteUrl, imageUrl, title, isFetching,
  } = props;

  return (
    <StyledDiv>
      { isFetching === true
        ? (
          <Loader active />
        ) : (
          <>
            <Image src={imageUrl} />
            <StyledTitle>{title}</StyledTitle>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <StyledLink href={siteUrl} target="_blank" />
          </>
        )}
    </StyledDiv>
  );
};
