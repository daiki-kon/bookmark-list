/* eslint-disable no-useless-escape */
/* eslint-disable no-invalid-regexp */
/* eslint-disable react/no-unescaped-entities */
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button, Modal, Form,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export type CreateBookmarkModalProps = {
  userName: string;
}

type FormInput = {
  bookmarkURL: string;
}

export const CreateBookmarkModal: FC<CreateBookmarkModalProps> = (props) => {
  const { userName } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState<string>('');

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

  return (
    <Modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      trigger={<Button>追加</Button>}
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
          }}
        />
      </Modal.Actions>
    </Modal>
  );
};
