import React, { FC } from 'react';
import {
  Button, Modal, Form, Sidebar, Segment, Menu, Icon, Header, Image, Label,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { FetchTagsResponse } from '../apiClients';

export type SideMenuProps = {
  tags: FetchTagsResponse;
  onClickLabel: () => void;
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
  const { tags, onClickLabel, children } = props;

  return (

    <Sidebar.Pushable as={StyledSegment}>
      <Sidebar
        as={StyledMenu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <StyledTagGroup>
          {tags.map((item) => (
            <StyledTagLabel tag color="teal" onClick={onClickLabel}>
              {item.tagName}
            </StyledTagLabel>
          ))}
        </StyledTagGroup>
      </Sidebar>

      <Sidebar.Pusher>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};
