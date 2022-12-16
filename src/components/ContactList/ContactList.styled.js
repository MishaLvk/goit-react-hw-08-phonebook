import styled from 'styled-components';

export const ListContact = styled.ul`
    display: flex;
  flex-direction: column;
  padding-left: 0;
  min-width: 50%;
}
`;

export const ContactListList = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  font-weight: 600;
  font-size: 22px;
  color: black;
`;

export const DeleteButton = styled.button`
  display: block;
  cursor: pointer;
  text-align: center;
  margin-left: auto;
  color: #ffffff;
  font-weight: 600;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #910101;
  border-color: black;
  box-shadow: 0px 8px 43px 0px rgba(255, 107, 1, 0.4);
  border-radius: 5px;
  transition: scale 550ms cubic-bezier(0.4, 0, 0.2, 1);
`;
