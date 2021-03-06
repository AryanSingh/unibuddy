import React, {Component} from 'react';
import styled from 'styled-components';
import { TiMessages } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons";
import BookCard from '../BookCard/BookCard';
import Portal from '../PortalWrapper/PortalWrapper';
import PropTypes from 'prop-types';

// the homepage is where most of the work happens, search bar exists in homepage, list of books gets rendered here. It recieves the hashtable, clearSearch callback function(it cleas the search input and current search results), searchResults (results corresponding to the current search string), setCurrentSearch (callback which takes the value of the currently typed search string in search input and sets it in app.js which leads to new search results being calculated)


export class HomePage extends Component {

	constructor(props){
		super(props);
		this.state= {
			selectedBooks: [],
			inputValue:'',
			listOpen: false,
			dropdownCords: {}
		};
		this.inputRef = React.createRef();

	};


	// two listeners are added in component will mount. One listens to the mousedown event so as to judge if to close the search dropwdown if the click is outside it. The second listener listens to the window resize event and calculates the cords for the search dropdown positioning.

	componentWillMount(){
		document.addEventListener('mousedown', this.handleClick, false);
		window.addEventListener('resize', this.setCoords, false);
	}

	//both event listeners are removed before the component is unmounted

	componentWillUnmount(){
		document.removeEventListener('mousedown', this.handleClick, false);
		window.removeEventListener('resize', this.setCoords, false);
	}

	//handle click is the listener function for the mousedown event for the searh dropdown. If search dropdown is open and click is detected outside it, the dropdown is closed and the search results cleared.

	handleClick = (e) => {
		if(this.node.contains(e.target)){
			return
		} else {
			this.props.clearSearch();
		}
	};


	//coordinates for rendering the dropdown are calculated

	componentDidMount(){
		this.setCoords();
	}

	// the setCoords is the listener funtion for the window resize event. If application/browser window is resized the corodinates are recalculated to corrrectly position the search dropdwon with respect to the search input

	setCoords = () => {
		const rect = this.inputRef.current.getBoundingClientRect();
		this.setState({dropdownCords: {
			left: rect.x ,
			top: rect.y,
			width: rect.width,
			height: rect.height
		}});
	};

	//renderList creates the list of bookcards and renders it.

	renderList = () => {
		return(
			<ListWrapper ref={node => this.node = node} cords={this.state.dropdownCords}>
				{this.props.searchResults.map((result) => {
					return(
						<ListItem key={result.id} onClick={() => this.suggestionClickHandler(result)}>
							<ItemTitle>{result.title}</ItemTitle>
							<ItemTitle>author: {result.author}</ItemTitle>
							<ItemSummary>{result.summary}</ItemSummary>
						</ListItem>
					)
				})}
			</ListWrapper>
		)
	};

	//handle change listens to the change in input value in search box and sets the new search value in the local state which leads to relcalcuation of search results

	handleChange = (value) => {
		this.setState({
			inputValue: value
		});

		this.props.setCurrentSearch(value);
	};


	//this is listener function to mouse clicks on the search suggestions, if any suggestion is clicked, it checks if the book had been selected earlier, if not it adds the book to the book list. After that it clears the current search input and clears the search results from the memory

	suggestionClickHandler = (result) => {
		if(this.state.selectedBooks.filter(book => book.id=== result.id).length === 0){
			let newBooks = [...this.state.selectedBooks, result];
			this.setState({ selectedBooks: newBooks })
		}
		this.props.clearSearch();
		this.setState({inputValue: '', listOpen: false})
	};

	//delete book deltes a book from the local state. the function is passed down to bookCard which calls it when a books needs to be deleted

	deleteBook = (book) => {
		let newBooks = this.state.selectedBooks.filter(item => book.id !== item.id);
		this.setState({ selectedBooks: newBooks })
	};

	// if there are no selected books in the list of user, it shows a default text.

	renderPlaceholder = () => {
		return(
			<PlaceHolder>
				<PlaceHolderText>You have no books in your list.</PlaceHolderText>
			</PlaceHolder>
		)
	};

	render(){
		return (
			<HomeContainer>
				<Wrapper>
					<Header>
						<IconTextContainer >
							<IconContainer>
								<IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name", size: 40 }}>
								<TiMessages />
								</IconContext.Provider>
							</IconContainer>
							<HeaderTextWrapper>
								<HeaderText>Unibuddy</HeaderText>
							</HeaderTextWrapper>
						</IconTextContainer>
						<InputContainer ref={this.inputRef}>
							<SearchIcon>
							<IconContext.Provider value={{ color: "#2874F0", className: "global-class-name", size: 20 }}>
								<BsSearch/>
							</IconContext.Provider>
							</SearchIcon>
							<Input onChange={(event) => this.handleChange(event.target.value)} value={this.state.inputValue} placeholder="Search for books..."/>
							<Portal>
								{this.state.dropdownCords.width && this.renderList()}
							</Portal>
						</InputContainer>
					</Header>
					<Content>
							{this.state.selectedBooks.map((book, index) => <BookCard index={index} book={book} deleteBook={this.deleteBook}/>)}
						{this.state.selectedBooks.length === 0 && this.renderPlaceholder()}
					</Content>
				</Wrapper>
			</HomeContainer>
		);
	}

}

export default HomePage;

HomePage.propTypes = {
	clearSearch: PropTypes.func,
	hashTable: PropTypes.object,
	searchResults: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		summary: PropTypes.string,
		author: PropTypes.string
	})),
	setCurrentSearch: PropTypes.func
};


const HomeContainer = styled.div`
	background-color: #FFFFFF;
	width: 100%;
	min-height: 100vh;
`;

const flexDefault = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	margin: auto;
	background-color: #FFFFFF;
`;

const IconTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	
	@media(min-width: 320px){
		justify-content: center;
	}
`;

const Header = styled.div`
	width: 100%;
	background-color: #2874F0;
	display: flex;
	position: fixed;
	z-index: 1000;
	@media(min-width: 320px){
		display: flex;
    height: 112px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
	}
	@media(min-width: 800px){
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 56px;
		justify-content: inherit;
	}
	text-transform: uppercase;
	top: 0;
`;

const IconContainer = styled(flexDefault)`
	margin-left: 10px;
`;

const HeaderTextWrapper = styled(flexDefault)`
	margin-left: 10px;
`;

const HeaderText = styled.p`
	font-family: Roboto;
	font-size: 24px;
	font-weight: 500;
	color: #FFFFFF;
	letter-spacing: .1rem;
	@media(min-width: 320px){
		margin: 0;
	}
	@media(min-width: 800px){
		margin: inherit;
	}
`;


const InputContainer = styled(flexDefault)`
	position: relative;
	
  @media(min-width: 320px){
		width: 90%;
	}
	@media(min-width: 800px){
		width: 50%;
		left: 50%;
  	transform: translate(-50%, 0);
	}
`;

const Input = styled.input`
	height: 60px;
	font-family: Roboto;
	font-size: 20px;
	font-weight: 400;
	padding: 0 30px 0 60px;
	color: #000000;
	background-color: #FFFFFF;
	opacity: 1;
	outline: none;
	width: 100%;
	border-radius: 2px 0 0 2px;
	border: 0;
	outline: 0 none;
	font-size: 14px;
	font-family: Roboto;
	font-weight: 400;
	height: 36px;
`;

const SearchIcon = styled.div`
	position: absolute;
	margin-left: 10px;
	left:0;
`;

const ListItem = styled(flexDefault)`
	padding: 10px 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  &:hover{
  	background-color: #ddd;
  }
`;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: #FFFFFF;
	position: absolute;
	max-height: 300px;
  overflow-y: scroll;
	overflow-x: hidden;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	cursor: pointer;
	z-index: 1000;
	width:  ${props => props.cords.width}px;
	left : ${props => props.cords.left}px;
	top: ${props => props.cords.top + props.cords.height +5}px;
`;

const ItemTitle = styled.p`
	font-size: 18px;
	font-weight: 500;
	font-style: Roboto;
	text-transform: capitalize;
	margin: 0;
`;


const ItemSummary = styled.p`
	font-size: 16px;
	font-weight: 400;
	font-style: Roboto;
	text-transform: capitalize;
	overflow: hidden;
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
   margin: 0;
`;


const Content = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	flex-wrap: wrap;
	margin-top: 70px;
	justify-content: flex-start;
	
	@media(min-width: 320px){
		margin-top: 130px;
	}
	@media(min-width: 800px){
		margin-top: 70px;
		justify-content: center;
	}
	@media(min-width: 1024px){
		margin-top: 70px;
		justify-content: flex-start;
	}
`;

const PlaceHolder = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	position: absolute;
  top: 45%;
	
`;

const PlaceHolderText = styled.p`
	font-family: Roboto;
	font-size: 20px;
	font-weight: 500;
`;