import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  padding-horizontal: 32px;
  bottom: 32px;
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
  right: 32px;
  top: -8px;
`;
