import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import { FaFutbol, FaTachometerAlt, FaUsers, FaCogs, FaCalendarAlt, FaHistory, FaChartLine, FaSignOutAlt } from 'react-icons/fa';

const SiderBarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #FFFFFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 10px; 
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

const SideLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => (props.isActive ? '#FFFFFF' : '#000000')};
  text-decoration: none;
  font-size: 18px;
  padding: 10px 10px;
  border-radius: 15px;
  background-color: ${props => (props.isActive ? '#6864D5' : 'transparent')};
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    color: #FFFFFF;
  }
`;

const ExitLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #000000; /* Texte noir */
  text-decoration: none;
  font-size: 18px;
  padding: 10px 10px;
  border-radius: 15px;
  transition: all 0.3s ease;
  width: 90%;
  text-align: center;

  &:hover {
    background-color: #e74c3c; 
    color: #FFFFFF;
  }
`;

const SiderBar = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <SiderBarContainer>
      <ProjectName>
        <FaFutbol /> ProScout Elite
      </ProjectName>
      <SideLink
        to="/dashboard"
        isActive={activeLink === 'dashboard'}
        onClick={() => handleClick('dashboard')}
      >
        <FaTachometerAlt /> Dashboard
      </SideLink>
      <SideLink
        to="/players"
        isActive={activeLink === 'players'}
        onClick={() => handleClick('players')}
      >
        <FaUsers /> Players
      </SideLink>
      <SideLink
        to="/tracking"
        isActive={activeLink === 'tracking'}
        onClick={() => handleClick('tracking')}
      >
        <FaChartLine /> Suivi des Recrutements
      </SideLink>
      <SideLink
        to="/history"
        isActive={activeLink === 'history'}
        onClick={() => handleClick('history')}
      >
        <FaHistory /> Historique des Transferts
      </SideLink>
      <SideLink
        to="/calendar"
        isActive={activeLink === 'calendar'}
        onClick={() => handleClick('calendar')}
      >
        <FaCalendarAlt /> Calendrier
      </SideLink>
      <SideLink
        to="/settings"
        isActive={activeLink === 'settings'}
        onClick={() => handleClick('settings')}
      >
        <FaCogs /> Paramètres
      </SideLink>
      <ExitLink
        href="#"
        onClick={() => alert('Exit clicked')}
      >
        <FaSignOutAlt /> Exit
      </ExitLink>
    </SiderBarContainer>
  );
};

export default SiderBar;
