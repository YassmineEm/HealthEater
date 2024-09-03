import React from 'react';
import styled from 'styled-components';
import SiderBar from '../components/SiderBar';
import { FaSearch, FaBell, FaUserCircle  } from 'react-icons/fa';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F6F5F5;
`;

const SidebarWrapper = styled.div`
  width: 250px; 
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-left: 40px;
  margin-top: -24px;
  flex-direction: column; 
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: -50px;
`;

const MainContent1 = styled.div`
  flex: 1;
  padding: 20px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  padding: 5px 10px;
  border-radius: 10px;
  height: 30px;
  width : 300px;
  margin: 20px;
  margin-left: 100px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #000000;
  padding: 5px;
  margin-left: 5px;
  width: 200px;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <ContentWrapper>
        <HeaderWrapper>
          <MainContent1>
            <h2>Bonjour Yassmine,</h2>
          </MainContent1>
          <SearchBar>
            <FaSearch />
            <SearchInput type="text" placeholder="Rechercher..." />
          </SearchBar>
          <NavIcons>
            <FaBell size={24} />
            <FaUserCircle size={24} />
          </NavIcons>
        </HeaderWrapper>
        <MainContent>
         
        </MainContent>
      </ContentWrapper>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
