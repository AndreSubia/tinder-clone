import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  width: 80%;
  margin-bottom: 8px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 32px;
`;

export const MoreInfoButton = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 0px;
  top: -8px;
`;
