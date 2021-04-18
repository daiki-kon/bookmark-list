import React, { FC, useState, useEffect } from 'react';
import {
  Button, Modal, Form,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UseTagsResponse } from '../hooks/Tags';

export type CreateTagModalProps = {
  createTag: UseTagsResponse[2];
}

type FormInput = {
  tagName: string;
}

const StyledAddButton = styled(Button)`
  margin-right: 0px !important;
  margin-top: 20px !important;
  width: 60% !important;
`;

const RefButton:FC = (props) => <StyledAddButton icon="plus" basic inverted {...props} />;

export const CreateTagModal: FC<CreateTagModalProps> = (props) => {
  const { createTag } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [tagName, setTagName] = useState<string>('');

  const {
    register, errors, trigger, setValue,
  } = useForm<FormInput>();

  useEffect(() => {
    register(
      'tagName',
      {
        required: true,
        maxLength: 10,
      },
    );
  }, []);

  return (
    <>
      <Modal
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={isOpen}
        trigger={<RefButton />}
      >
        <Modal.Header>新しいTagを作成</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              name="tagName"
              fluid
              label="Tag Name"
              onChange={(e, { value }) => {
                setTagName(value);
                setValue('tagName', value);
              }}
              error={errors?.tagName !== undefined}
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
              const result = await trigger(['tagName']);
              if (result === false) return;
              setValue('tagName', '');
              setIsOpen(false);
              createTag(tagName);
            }}
          />
        </Modal.Actions>
      </Modal>

    </>
  );
};
