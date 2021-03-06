import React, { FC } from 'react';
import {
  Label,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { PostTagResponse } from '../apiClients';

export type BookmarkTagsAreaProps = {
  tags: PostTagResponse[];
}

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const StyledTagLabel = styled(Label)`
  margin-right: 10px !important;
`;

export const BookmarkTagsArea: FC<BookmarkTagsAreaProps> = (props) => {
  const { tags } = props;

  return (
    <Wrapper>
      {tags.map((item) => <StyledTagLabel tag color="teal">{item.name}</StyledTagLabel>)}
    </Wrapper>
  );
};
