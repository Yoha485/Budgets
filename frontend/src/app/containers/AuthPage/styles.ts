import styled from 'styled-components';
import tw from 'twin.macro';

interface SwitchProps {
	activated?: boolean;
}

interface InputProps {
  placeholder?: string;
	name?: string;
}

export const PageContainer = styled.div`
	${tw`flex flex-col items-center`}
`;

export const FormContainer = styled.div`
	box-shadow: 0px 14px 58px 10px rgba(0, 0, 0, 0.05);
	border-radius: 30px;
  background-color: white;

  div:last-of-type {
    margin-top: auto;
  }

	${tw`flex flex-col md:m-32 m-20 p-10 w-10/12 md:w-[34rem] md:min-h-[37.5rem] h-auto`}
`;

export const FormTopContainer = styled.div`
	${tw`flex flex-row w-full h-auto`}
`;

export const FormBottomContainer = styled.div``;

export const TopSwitch = styled.div`
	border-bottom-width: 2px;
	flex-basis: 50%;
	border-color: ${(props: SwitchProps) => (props.activated ? '#27BF75' : '#E2E2E2')};
	color: ${(props: SwitchProps) => (props.activated ? 'black' : '#E2E2E2')};
	${tw`pb-3 flex flex-row justify-center text-xl font-semibold cursor-pointer`}
`;

export const Form = styled.form`
	${tw`flex flex-col gap-6`}
`;

export const Input = styled.input`
  border-radius: 100px;
  outline: none;
  placeholder: ${(props: InputProps) => (props.placeholder)};
	name: ${(props: InputProps) => (props.name)};
  border-color: #27BF75;
	${tw`pl-6 border-2 h-[3.5rem]`}
`;

export const ForgotPassword = styled.div`${tw`mt-6 text-[#BABABA] text-center`}`
