import styled from 'styled-components';
import tw from 'twin.macro';

export const NavbarContainer = styled.div`
	min-height: 68px;
	${tw`
    w-full
    max-w-screen-2xl
    place-self-center
    flex
    flex-row
    items-center
    px-3
    md:px-12
    sm:px-6
    justify-between
  `};
`;

export const LogoContainer = styled.div`
	${tw`h-full`}
`;

export const AuthButtons = styled.div`
	${tw`flex flex-row justify-end items-center gap-7`}
`;
