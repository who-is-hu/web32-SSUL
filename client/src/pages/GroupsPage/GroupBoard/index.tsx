import React from 'react';
import styled from '@emotion/styled';
import PostList from './PostList';

function GroupBoard(): JSX.Element {
  return (
    <Container>
      <PostList />
    </Container>
  );
}

const Container = styled.div``;

export default GroupBoard;
