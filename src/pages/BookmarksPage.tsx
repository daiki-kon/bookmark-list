import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import {
  Loader,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import { BookmarksArea } from '../components/BookmarksArea';
import { useBookmarks } from '../hooks/Bookmarks';
import { useTags } from '../hooks/Tags';
import { SideMenu } from '../components/SideMenu';
import { CreateBookmarkModalContainer } from '../containers/CreateBookmarkModalContainer';

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const BookmarksPage: FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [bookmarks, isFetchingBookmarks, createBookmark, filterTag] = useBookmarks({ userName });

  const [tags, , createTag] = useTags(userName);

  return (
    // eslint-disable-next-line max-len
    <SideMenu
      tags={tags}
      createTag={createTag}
      onClickLabel={filterTag}
    >
      <StyledWrapper>
        <CreateBookmarkModalContainer
          userName={userName}
          createBookmark={createBookmark}
          tags={tags}
        />
        {isFetchingBookmarks === true
          ? (
            <Loader active>Loading</Loader>
          )
          : (
            <BookmarksArea userName={userName} bookmarks={bookmarks} />
          )}
      </StyledWrapper>
    </SideMenu>

  );
};
