import styled from 'styled-components';
import tw from 'twin.macro';

interface ButtonProps {
	background: 'white' | 'green';
	rounded?: boolean;
	auth?: boolean;
}

export const ButtonContainer = styled.div`
	${tw`flex flex-row justify-center items-center gap-2 px-5 pt-4 pb-3 font-biryani cursor-pointer`}
	height: ${(props: ButtonProps) => (props.auth && '65px')};
	font-weight: ${(props: ButtonProps) => (props.auth && '600')};
	color: ${(props: ButtonProps) => (props.background === 'white' ? '#292f5f' : '#f1fbf7')};
	background-color: ${(props: ButtonProps) =>
		props.background === 'white' ? 'inherit' : '#00bf71'};
	border-radius: ${(props: ButtonProps) => (props.rounded ? '100px' : '17px')};
	text-align: center;
`;
