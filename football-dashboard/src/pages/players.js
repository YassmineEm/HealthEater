import React, { useState } from 'react';
import styled from 'styled-components';
import SiderBar from '../components/SiderBar';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const players = [
  { name: 'Lionel Messi', age: 36, position: 'Attaquant', club: 'Inter Miami', marketValue: '60M€', image: 'https://via.placeholder.com/50', stars: 5, height: '1.70m', weight: '72kg', games: 750, goals: 700, assists: 300, status: 'Under Contract', clubImage: 'https://via.placeholder.com/50' },
  { name: 'Cristiano Ronaldo', age: 39, position: 'Attaquant', club: 'Al-Nassr', marketValue: '50M€', image: 'https://via.placeholder.com/50', stars: 5, height: '1.87m', weight: '83kg', games: 850, goals: 750, assists: 250, status: 'Under Contract', clubImage: 'https://via.placeholder.com/50' },
  { name: 'Kylian Mbappé', age: 25, position: 'Attaquant', club: 'PSG', marketValue: '180M€', image: 'https://via.placeholder.com/50', stars: 4, height: '1.78m', weight: '73kg', games: 400, goals: 250, assists: 120, status: 'Free', clubImage: '' },
  { name: 'Kevin De Bruyne', age: 32, position: 'Milieu de terrain', club: 'Manchester City', marketValue: '90M€', image: 'https://via.placeholder.com/50', stars: 4, height: '1.81m', weight: '74kg', games: 500, goals: 100, assists: 150, status: 'Under Contract', clubImage: 'https://via.placeholder.com/50' },
  { name: 'Virgil van Dijk', age: 32, position: 'Défenseur', club: 'Liverpool', marketValue: '70M€', image: 'https://via.placeholder.com/50', stars: 4, height: '1.93m', weight: '92kg', games: 400, goals: 30, assists: 15, status: 'Free', clubImage: '' },
];

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
  width: 300px;
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

const PlayerTableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  color: #333;
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const PlayerImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const Tr = styled.tr`
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-radius 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #6864D5;
    color: #ffffff;
    transform: translateZ(10px) translateY(-5px);
  }
`;

const PlayerCard = styled.div`
  position: fixed;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1000;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const PlayerCardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const PlayerCardTitle = styled.h3`
  text-align: center;
  margin: 10px 0;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: ${props => (props.filled ? '#FFD700' : '#ddd')};
  font-size: 20px;
  margin: 0 2px;
`;

const Divider = styled.hr`
  margin: 10px 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

const PlayerCardInfo = styled.p`
  margin: 5px 0;
  text-align: center;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-around; /* Distribution uniforme des éléments */
  margin-top: 10px;
`;

const Stat = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column; /* Empile les éléments verticalement */
  align-items: center;
`;

const StatNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 999;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 3px 6px;
  border-radius: 5px;
  background-color: ${props => (props.status === 'Under Contract' ? '#4CAF50' : '#F44336')};
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
`;

const DetailsButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;


const Player = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleRowClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseCard = () => {
    setSelectedPlayer(null);
  };

  return (
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
          <PlayerTableContainer>
            <Table>
              <thead>
                <tr>
                  <Th>Status</Th>
                  <Th>Nom</Th>
                  <Th>Âge</Th>
                  <Th>Position</Th>
                  <Th>Club Actuel</Th>
                  <Th>Valeur de Marché</Th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <Tr key={index} onClick={() => handleRowClick(player)}>
                    <Td>
                      <StatusBadge status={player.status}>{player.status}</StatusBadge>
                    </Td>
                    <Td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <PlayerImage src={player.image} alt={player.name} />
                        {player.name}
                      </div>
                    </Td>
                    <Td>{player.age}</Td>
                    <Td>{player.position}</Td>
                    <Td>{player.club}</Td>
                    <Td>{player.marketValue}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </PlayerTableContainer>
        </MainContent>
      </ContentWrapper>
      <Overlay isOpen={!!selectedPlayer} onClick={handleCloseCard} />
      <PlayerCard isOpen={!!selectedPlayer}>
        {selectedPlayer && (
          <>
            <PlayerCardImage src={selectedPlayer.image} alt={selectedPlayer.name} />
            <PlayerCardTitle>{selectedPlayer.name}</PlayerCardTitle>
            <StarContainer>
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < selectedPlayer.stars}>★</Star>
              ))}
            </StarContainer>
            <Divider />
            <PlayerCardInfo>{selectedPlayer.position}</PlayerCardInfo>
            <StatsRow>
              <PlayerCardInfo>Height: {selectedPlayer.height}</PlayerCardInfo>
              <PlayerCardInfo>Weight: {selectedPlayer.weight}</PlayerCardInfo>
            </StatsRow>
            <StatsRow>
              <Stat>
                <StatNumber>{selectedPlayer.games}</StatNumber>
                <StatLabel>Games</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{selectedPlayer.goals}</StatNumber>
                <StatLabel>Goals</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{selectedPlayer.assists}</StatNumber>
                <StatLabel>Assists</StatLabel>
              </Stat>
            </StatsRow>
          </>
        )}
      </PlayerCard>
    </DashboardContainer>
  );
};

export default Player;
