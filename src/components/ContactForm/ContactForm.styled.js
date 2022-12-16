import styled from 'styled-components';

export const Form = styled.form`
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  border: 1px solid white;
  box-sizing: border-box;
  max-width: 90%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  color: #e6deca;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  // border-bottom: 1px solid grey;
`;

export const Input = styled.input`
  font-size: 20px;
  font-weight: 500;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  outline: none;
  color: #ff6b01;
`;

export const SubmitButton = styled.button`
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
  background-color: #ff6b01;
  border-color: #ff6b01;
  box-shadow: 0px 8px 43px 0px rgba(255, 107, 1, 0.4);
  border-radius: 5px;
  transition: scale 550ms cubic-bezier(0.4, 0, 0.2, 1);
`;
