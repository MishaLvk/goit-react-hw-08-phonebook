import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 40%;
  padding: 15px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  padding-right: 20px;
  background-color: transparent;
  border: none;
  width: 90%;
  height: 38px;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.14;
  color: #ff6b01;
  border-bottom: 1px solid grey;
  margin-bottom: 20px;
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

export const Label = styled.label`
  width: 60%;
  font-weight: 600;
  font-size: 18px;
  color: white;
`;
