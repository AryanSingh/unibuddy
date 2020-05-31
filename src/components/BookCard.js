import React, {Component} from 'react';
import styled from 'styled-components';



const BookCard = (props) => {
	let book = {...props};
	console.log('props', props, book);

	return(
		<Wrapper index={props.index}>
			<HeadingWrapper>
				<Title>{props.book.title}</Title>
			</HeadingWrapper>
			<SummaryWrapper>
				<Summary>{props.book.summary}</Summary>
			</SummaryWrapper>

		</Wrapper>
	)
};

export default BookCard;


export const Wrapper = styled.div`
	
	
	 text-overflow: ellipsis;
   -webkit-line-clamp: 2; 
	
	@media(min-width: 320px){
		width: 100%;
	}
	@media(min-width: 768px){
		width: 45%;
		margin-right: ${props => props.index % 2 === 0 ? '2.5%' : 0};
		margin-left: ${props => props.index %2 === 1 ? '2.5%' : 0};
	}
	@media(min-width: 1024px){
		width: 30%;
		margin-left: ${props => props.index % 3 === 1 ? '5%' : 0};
		margin-right: ${props => props.index % 3 === 1 ? '5%' : 0};
	}
	
	
	
`;

const SummaryWrapper = styled.div`
	
`;

const HeadingWrapper = styled.div`
	
`;

const Title = styled.p`
	font-family: Roboto;
	font-size: 18px;
	font-weight: 400;
`;

const Summary = styled.p`
	font-family: Roboto;
	font-size: 16px;
	font-weight: 300;
	text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
`;



