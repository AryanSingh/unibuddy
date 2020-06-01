import React, {Component} from 'react';
import styled from 'styled-components';
import {modifySummary} from "../Api/helpers";
import { MdDelete } from 'react-icons/md';
import { IconContext } from "react-icons";




const BookCard = (props) => {
	let book = {...props};
	console.log('props', props, book);



	return(
		<Wrapper index={props.index}>
			<HeadingWrapper>
				<Title>{props.book.title}</Title>
			</HeadingWrapper>
			<SummaryWrapper>
				<Summary>{modifySummary(props.book.summary)}</Summary>
			</SummaryWrapper>
			<IconContainer onClick={() => this.props.deleteBook(props.book)}>
				<IconContext.Provider value={{ color: "#FD4141", className: "global-class-name", size: 20 }}>
					<MdDelete  />
				</IconContext.Provider>
			</IconContainer>

		</Wrapper>
	)
};

export default BookCard;


export const Wrapper = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; 
  padding: 10px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; 
	
	@media(min-width: 320px){
		width: 90%;
		margin: auto;
		
		
	}
	@media(min-width: 768px){
		width: 45%;
		margin-bottom: 20px;

		margin-left: 5%;
		margin-right: 5%;
		height: 300px;
	}
	@media(min-width: 1024px){
		width: 30%;
		
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

const IconContainer = styled.div`
	
`;



