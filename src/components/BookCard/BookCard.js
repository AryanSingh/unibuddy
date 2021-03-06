import React, {Component} from 'react';
import styled from 'styled-components';
import {modifySummary} from "../../Api/helpers";
import { MdDelete } from 'react-icons/md';
import { IconContext } from "react-icons";
import PropTypes from 'prop-types';


//book card component is used for displaying the individual book data, it takes the book data and a callback function which deletes the book as arguments. BookCard component is responsive to mobile, tablet and desktop screen sizes.

const BookCard = (props) => {
	return(
		<Wrapper data-testid="bookCardWrapper" index={props.index}>
			<HeadingWrapper data-testid="titleAuthorWrapper">
				<Title>{props.book.title}</Title>
				<Title>{props.book.author}</Title>
			</HeadingWrapper>
			<SummaryWrapper>
				<Summary>{modifySummary(props.book.summary)}</Summary>
			</SummaryWrapper>
			<IconContainer onClick={() => props.deleteBook(props.book)}>
				<IconContext.Provider value={{ color: "#FD4141", className: "global-class-name", size: 20 }}>
					<MdDelete  />
				</IconContext.Provider>
			</IconContainer>
		</Wrapper>
	)
};

export default BookCard;

BookCard.propTypes = {
	index: PropTypes.number,
	book: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		summary: PropTypes.string,
		author: PropTypes.string
	}),
	deleteBook: PropTypes.func
};


export const Wrapper = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; 
  padding: 10px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; 
  position: relative;
	
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
		margin-left: 1%;
		margin-right: 1%;
		
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
	position: absolute;
	right: 10px;
	top: 5px;
`;

const InsideWrapper = styled.div`
	position: relative;
`;



