import styled from 'styled-components';
import tw from 'twin.macro';


export const PlusButtonContainer = styled.span`
	display: inline-flex;
	align-items: center;
	width: 50px;
	max-width: 150px;
	border-radius: 4px;
  ${tw`justify-center gap-1 bg-[#ECECEC]`}

	input[type='color'] {
		-webkit-appearance: none;
		border: none;
		width: auto;
		height: auto;
		cursor: pointer;
		background: none;
		&::-webkit-color-swatch-wrapper {
			padding: 0;
			width: 14px;
			height: 14px;
		}
		&::-webkit-color-swatch {
			border: 1px solid #bfc9d9;
			border-radius: 4px;
			padding: 0;
		}
	}
`;

export const Plus = styled.div`${tw`cursor-pointer`}`;
