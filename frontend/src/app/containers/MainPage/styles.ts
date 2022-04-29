import styled from 'styled-components';
import tw from 'twin.macro';

interface CategoryProps {
	backgroundColor: string;
}

export const MainPageContainer = styled.div`
	${tw`
    max-w-screen-2xl
    p-3
    md:p-12
    sm:p-6
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export const MainTopContainer = styled.div`
	${tw`w-full flex flex-row items-center gap-10`}
`;

export const DateContainer = styled.div`
	border-radius: 30px;
  min-height: 88px;
	width: 160px;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
  ${tw`bg-white`}
`;

export const CategoriesContainer = styled.div`
	overflow-x: scroll;
	border-radius: 15px;
	min-height: 90px;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	${tw`
    w-full
    px-3.5
    py-[1.3rem]
    flex
    flex-row
    gap-4
    justify-start
    bg-white
  `}
`;

export const CategoryContainer = styled.div`
	// background-color: ${(props: CategoryProps) => props.backgroundColor};
  border: 2px solid;
  border-color: ${(props: CategoryProps) => props.backgroundColor};
	border-radius: 15px;
	${tw`
    flex
    justify-center 
    items-center
    px-[2.3rem]
    text-black
    text-lg
    font-semibold
  `}
`;

export const DonutChartContainer = styled.div``;
