import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import SiderBar from '../components/SiderBar';
import { FaSearch, FaBell, FaUserCircle, FaTimes } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: 'Session de Scouting',
    allDay: false,
    start: new Date(2024, 8, 10, 10, 0),
    end: new Date(2024, 8, 10, 12, 0),
    desc: 'Observation de joueurs pour la prochaine saison.',
  },
  {
    id: 1,
    title: 'Réunion avec l\'Agent',
    allDay: false,
    start: new Date(2024, 8, 12, 14, 0),
    end: new Date(2024, 8, 12, 15, 30),
    desc: 'Discussion des termes du contrat pour les nouveaux recrues.',
  },
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
  flex-direction: column;
  margin-left: 40px;
  margin-top: -24px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 13px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
`;

const CalendarContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const EventDetails = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #000;
  }
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

const FootballRecruiterCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleSelectSlot = (slotInfo) => {
    alert(`Vous avez cliqué sur le créneau: ${slotInfo.startStr}`);
  };

  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <DashboardContainer>
      <ContentWrapper>
        <HeaderWrapper>
          <h2>Bonjour Yassmine,</h2>
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
          <CalendarContainer>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '80vh', width: '100%' }}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
            />
          </CalendarContainer>
          {selectedEvent && (
            <EventDetails>
              <CloseButton onClick={handleCloseDetails} />
              <h2>Détails de l'Événement</h2>
              <p>{selectedEvent.title}</p>
              <p>{selectedEvent.desc}</p>
              <p><strong>Début:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm a')}</p>
              <p><strong>Fin:</strong> {moment(selectedEvent.end).format('MMMM Do YYYY, h:mm a')}</p>
            </EventDetails>
          )}
        </MainContent>
      </ContentWrapper>
    </DashboardContainer>
  );
};

export default FootballRecruiterCalendar;



