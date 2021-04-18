import React, { FC } from 'react';
import {
  Button, Modal, Form, Sidebar, Segment, Menu, Label,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { FetchTagsResponse } from '../apiClients';
import { CreateTagModal } from './CreateTagModal';
import { UseTagsResponse } from '../hooks/Tags';

export type SideMenuProps = {
  tags: FetchTagsResponse;
  onClickLabel: () => void;
  createTag: UseTagsResponse[2];
}

const StyledTagGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;

const StyledTagLabel = styled(Label)`
  margin-top: 10px !important;
  :hover {
    cursor: pointer;
  }
`;

const StyledSegment = styled(Segment)`
  margin-top: 0px !important;
`;

const StyledMenu = styled(Menu)`
  background-color: silver !important;
`;

export const SideMenu: FC<SideMenuProps> = (props) => {
  const {
    tags, onClickLabel, children, createTag,
  } = props;

  return (

    <Sidebar.Pushable as={StyledSegment}>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <StyledTagGroup>
          {tags.map((item) => (
            <StyledTagLabel tag color="teal" onClick={onClickLabel} key={item.id}>
              {item.name}
            </StyledTagLabel>
          ))}
        </StyledTagGroup>
        <CreateTagModal createTag={createTag} />
      </Sidebar>

      <Sidebar.Pusher>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};
