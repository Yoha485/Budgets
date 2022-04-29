import styled from 'styled-components';

interface MarginerProps{
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

export const MarginerContainer = styled.div`
	margin-top: ${(props: MarginerProps) => props.mt};
  margin-bottom: ${(props: MarginerProps) => props.mb};
  margin-left: ${(props: MarginerProps) => props.ml};
  margin-right: ${(props: MarginerProps) => props.mr}
`;
