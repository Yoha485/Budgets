import styled from 'styled-components';
import tw from 'twin.macro';
import Modal from 'styled-react-modal';

interface CategoryProps {
	borderColor?: string;
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
    h-screen
    items-center
  `}
`;

export const MainTopContainer = styled.div`
	${tw`w-full flex flex-row items-center gap-10`}
`;

export const AddContainer = styled.div`
	border-radius: 30px;
	min-height: 88px;
	width: auto;
	filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	padding-bottom: 22px;
	padding-top: 22px;
	${tw`bg-white flex flex-row px-8`}
`;

export const AddExpense = styled.div`
	border-radius: 15px;
	${tw`flex flex-row justify-center items-center w-[5.5rem] bg-[#556EEE] text-xl text-white pb-1 cursor-pointer`}
`;

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 66.666667%;
  height: auto;
  z-index: 30;
  padding: 30px;
  background-color: white;
  border-radius: 30px;
`;

export const ModalClose = styled.div`
	svg {
		cursor: pointer;
	}
	${tw`flex flex-row justify-end`}
`;

export const ModalSelectCategory = styled.select`
	${tw`outline-none border-2 p-2 rounded-lg`}
`;

export const ModalExpenseName = styled.input`
	${tw`outline-none border-2 p-2 rounded-lg`}
`;

export const ModalExpenseCost = styled.input`
	${tw`outline-none border-2 p-2 rounded-lg`}
`;

export const ModalSubmitContainer = styled.div`
	${tw`flex flex-row justify-end`}
`;

export const CategoriesContainer = styled.div`
	overflow-x: scroll;
	border-radius: 15px;
	min-height: 85px;
	filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	padding-bottom: 15px;
	padding-top: 22px;
	${tw`
    w-full
    px-8
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
	white-space: nowrap;
	${tw`
    w-[7.5rem]
    flex
    justify-center
    items-center
    cursor-pointer
  `}
`;

export const CategoryName = styled.input`
	background-color: inherit;
	text-align: center;
	${tw`w-[6.5rem] outline-none p-1 text-black text-lg font-semibold`}
`;

export const DataContainer = styled.div`
	${tw`w-full flex md:flex-row flex-col items-center gap-10`}
`;

export const HistoryContainer = styled.div`
	border-radius: 15px;
	filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	overflow-y: scroll;
	${tw`min-w-[20rem] flex flex-col gap-1 bg-white w-full h-full p-5`}
`;

export const HistoryTitle = styled.div`
	${tw`flex flex-row text-xl font-bold pb-3`}
`;

export const HistoryToken = styled.div`
	position: relative;
	${tw`flex flex-row`}
`;

export const ExpenseName = styled.div`
	p {
		${tw`font-semibold`}
	}
`;

export const Cost = styled.div`
	position: absolute;
	right: 0;
	${tw`text-[#DE1919] place-self-end font-medium`}
`;

export const DonutChartContainer = styled.div`
	position: relative;
	border-radius: 15px;
	filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
	${tw`bg-white md:w-[30rem] w-[98%] m-0`}
`;
