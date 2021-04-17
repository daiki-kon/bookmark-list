/* eslint-disable no-useless-escape */
/* eslint-disable no-invalid-regexp */
/* eslint-disable react/no-unescaped-entities */
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button, Modal, Form, Label,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

export type CreateBookmarkModalProps = {
  userName: string;
  createBookmark: (bookmarkURL: string, tagsIDs: string[]) => Promise<void>;
  selectTagsOptions: {
    key: string;
    text: string;
    value: string;
  }[]
}

const StyledAddButton = styled(Button)`
  margin-left: 10px !important;
`;

type FormInput = {
  bookmarkURL: string;
}

// node.contains is not a function の回避
const RefButton:FC = (props) => <StyledAddButton {...props} />;

export const CreateBookmarkModal: FC<CreateBookmarkModalProps> = (props) => {
  const { userName, createBookmark, selectTagsOptions } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState<string>('');
  const [tagsID, setTagsID] = useState<string[]>([]);

  const {
    register, errors, trigger, setValue,
  } = useForm<FormInput>();

  useEffect(() => {
    register(
      'bookmarkURL',
      {
        required: true,
        pattern: /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/,
      },
    );
  }, []);

  const renderLabel = (label: any) => ({
    color: 'teal',
    content: `${label.text}`,
  });

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      trigger={<RefButton>追加</RefButton>}
    >
      <Modal.Header>新しいBookmarkを追加</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            name="bookmarkURL"
            fluid
            label="Bookmark URL"
            onChange={(e, { value }) => {
              setUrl(value);
              setValue('bookmarkURL', value);
            }}
            error={errors?.bookmarkURL !== undefined}
          />
          <Form.Dropdown
            label="Select Tag"
            fluid
            multiple
            selection
            options={selectTagsOptions}
            renderLabel={renderLabel}
            onChange={(e, { value }) => { setTagsID(value as string[]); }}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setIsOpen(false)}>
          キャンセル
        </Button>
        <Button
          content="保存"
          labelPosition="right"
          icon="save"
          positive
          onClick={async () => {
            const result = await trigger(['bookmarkURL']);
            console.log(errors);
            if (result === false) return;
            setValue('bookmarkURL', '');
            setIsOpen(false);
            createBookmark(url, tagsID);
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};
