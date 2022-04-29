import styled from 'styled-components';
import tw from 'twin.macro';

export const LogoContainer = styled.div`
	${tw`
    flex
    items-center
    h-full
    cursor-pointer
  `}
`;

export const LogoText = styled.div`
	${tw`
    h-full
    text-xl
    md:text-2xl
    font-extrabold
    text-black
    ml-3
    pt-2
    font-black
    font-biryani
  `}
`;

export const Image = styled.div`
	width: auto;

	${tw`text-[#29c074] h-full`};

	img {
		width: auto;
		height: 100%;
	}
`;
