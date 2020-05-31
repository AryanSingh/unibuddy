import React, {Component} from 'react';
import styled from 'styled-components';
import { TiMessages } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons";



export class HomePage extends Component {

	constructor(props){
		super(props);
		this.state={
			selectedBooks: []

	};

	componentDidMount(){

	}



	renderList = () => {
		return(
			<ListWrapper>
				{this.props.searchResults.map((result) => {
					return(
						<ListItem key={result.id} onClick={() => this.suggestionClickHandler(result)}>
							<ItemTitle>{result.title}</ItemTitle>
							<ItemSummary>{result.summary}</ItemSummary>
						</ListItem>
						)
				})}
			</ListWrapper>
		)
	};

	handleChange = (value) => {
		console.log('value change', value);
		this.props.setCurrentSearch(value)
	};

	suggestionClickHandler = (result) => {
		this.state.selectedBooks.filter()
	};

	render(){
		return (
			<HomeContainer>
				<Wrapper>
					<Header>
						<IconContainer>
							<IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name", size: 40 }}>
							<TiMessages />
							</IconContext.Provider>
						</IconContainer>
						<HeaderTextWrapper>
							<HeaderText>Unibuddy</HeaderText>
						</HeaderTextWrapper>
						<InputContainer>
							<SearchIcon>
							<IconContext.Provider value={{ color: "#000000", className: "global-class-name", size: 40 }}>
								<BsSearch/>
							</IconContext.Provider>
							</SearchIcon>
							<Input onChange={(event) => this.handleChange(event.target.value)}/>
							{this.renderList()}
						</InputContainer>
					</Header>
				</Wrapper>
			</HomeContainer>
		);
	}

}

export default HomePage;

const HomeContainer = styled.div`
	background-color: #FFFFFF;
	width: 100%;
	height: 200vh;
`;

const flexDefault = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 90%;
	margin: auto;
	background-color: #FFFFFF;
`;

const Header = styled.div`
	height: 100px;
	width: 100%;
	background-color: #000000;
	display: flex;
	flex-direction: row;
	align-items: center;
	text-transform: uppercase;
	position: relative;
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
`;


const InputContainer = styled(flexDefault)`
	position: relative;
	left: 50%;
  transform: translate(-50%, 0);
`;

const Input = styled.input`
	width: 40vw;
	height: 60px;
	font-family: Roboto;
	font-size: 20px;
	font-weight: 400;
	padding: 0 30px 0 60px;
	color: #000000;
	background-color: #FFFFFF;
	opacity: 1;
	outline: none;
	
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
	top: 65px;
	max-height: 300px;
  overflow-y: scroll;
	overflow-x: hidden;
	width: 100%;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	cursor: pointer;
      

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
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; 
   -webkit-box-orient: vertical;
   margin: 0;
`;