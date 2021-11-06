import React from 'react';
import styled from '@emotion/styled';
import SearchFilter from '../../components/SearchFilter';
import GroupCard from '../../components/GroupCard';

function GroupRecruitPage(): JSX.Element {
  return (
    <Container>
      <SearchFilter />
      <GroupCardList>
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </GroupCardList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

const GroupCardList = styled.div`
  display: grid;
  margin: 10px auto;

  grid-template-columns: repeat(4, minmax(250px, 2fr));
  grid-template-rows: repeat(auo-fit, minmax(100px, 2fr));
`;
export default GroupRecruitPage;
