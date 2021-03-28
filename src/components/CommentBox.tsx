import React, { FC, useEffect } from 'react';
import {
  Form, TextArea, Button, Container,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

export type CommentBoxProps = {
  isEdit: boolean;
  commentMarkdown: string;
  commentHtml: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSave: () => void;
  onClickEdit: () => void;
}

const StyledForm = styled(Form)`
  position:relative;
  width: 100% !important;
  height: 100% !important;
  max-width: 240px !important;
`;

const StyledTextArea = styled(TextArea)`
  resize: none !important;
  min-height: 263px !important;
  max-width: 240px !important;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 15px !important;
  margin-bottom: 5px !important;
`;

const StyledContainer = styled(Container)`
  resize: none !important;
  min-height: 263px !important;
  max-height: 244px;
  max-width: 240px;
  width: 100%;
  height: 100%;

  padding: .78571429em 1em;
  word-break : break-all;
  overflow-y: auto;
`;

export const CommentBox: FC<CommentBoxProps> = (props) => {
  const {
    isEdit, commentMarkdown, commentHtml, onChange, onClickSave, onClickEdit,
  } = props;

  return (
    <StyledForm>
      {isEdit ? (
        <>
          <StyledTextArea placeholder="コメント" onChange={onChange} value={commentMarkdown} />
          <StyledButton circular icon="save" onClick={onClickSave} />
        </>
      ) : (
        <StyledContainer>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: commentHtml }} />
          <StyledButton circular icon="edit" onClick={onClickEdit} />
        </StyledContainer>
      )}
    </StyledForm>
  );
};
