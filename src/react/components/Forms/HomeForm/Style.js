import styled from 'styled-components';

import { Button, LabledTextInput } from '../../FormElements';

export const CreateButton = styled(Button)`
  margin: 20px auto 0;
`;

export const Error = styled.span`
  color: #b3154a;
  font-size: 13px;
  text-transform: lowercase;
  margin-top: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    min-width: 300px;
    align-self: center;
    border: none;
    border-bottom: 1px solid lightgray;
    outline: none;
  }
`;

export const Input = styled(LabledTextInput)`

`;
