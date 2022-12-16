import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 50px;
  width: 90%;
  margin-top: 20px;
`;

export const AddContact = styled.div`
  display: flex;

  justify-content: space-around;
  width: 50%;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  padding-left: 30px;
  width: 50%;
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
