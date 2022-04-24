import styled from 'styled-components';
import tw from 'twin.macro';

export const CardContainer = styled.div`
	${tw`rounded-lg h-60 w-72 flex flex-col items-center shadow-2xl bg-white`}
`;

export const CardImg = styled.div`
	${tw`w-full relative left-6 -top-9`}
`;

export const CardText = styled.div`
	${tw`items-center w-full px-4`}
`;

export const CardTitle = styled.p`
	${tw`w-full text-[#192c5a] font-biryani text-xl font-extrabold`}
`;

export const CardSubtitle = styled.p`
	${tw`w-full text-[#9b9fb2] font-biryani text-lg font-semibold`}
`;
