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
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Input = styled(LabledTextInput)`

`;
