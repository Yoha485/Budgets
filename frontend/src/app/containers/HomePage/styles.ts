import styled from 'styled-components';
import tw from 'twin.macro';

export const PageContainer = styled.div`
	${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export const HeadingContainer = styled.div`
	${tw`flex flex-col items-center mt-24 w-full h-auto`}
`;

export const MainTitle = styled.p`
	${tw`font-biryani text-7xl text-black font-extrabold`}
	text-align: center;
`;

export const Subtitle = styled.p`
	${tw`font-biryani text-xl text-[#AFAFAF] font-medium my-10`}
	text-align: center;
`;

export const HomeCardsContainer = styled.div`
	${tw`flex flex-wrap w-full justify-center items-center gap-20 my-32`}
`;

export const Br = styled.br``;
