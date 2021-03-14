import React, { FC } from 'react';
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
`;

const StyledTextArea = styled(TextArea)`
  resize: none !important;
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
  width: 100%;
  height: 100%;
`;

export const CommentBox: FC<CommentBoxProps> = (props) => {
  const {
    isEdit, commentMarkdown, commentHtml, onChange, onClickSave, onClickEdit,
  } = props;

  return (
    <div>
      {isEdit ? (
        <StyledForm>
          <StyledTextArea placeholder="コメント" onChange={onChange} value={commentMarkdown} />
          <StyledButton circular icon="save" onClick={onClickSave} />
        </StyledForm>
      ) : (
        <StyledContainer>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: commentHtml }} />
          <StyledButton circular icon="edit" onClick={onClickEdit} />
        </StyledContainer>
      )}
    </div>
  );
};
