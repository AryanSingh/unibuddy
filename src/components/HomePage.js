import React, {Component} from 'react';
import styled from 'styled-components';
import { TiMessages } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons";



export class HomePage extends Component {

	constructor(props){
		super(props);
		this.state={
			list: [
				"apple is red",
				"banana is yellow",
				"mango is ripe"
			]
		}
	}

	componentDidMount(){

	}



	renderList = () => {
		return(
			<ListWrapper>
				{this.props.searchResults.map((result) => {
					return(
						<ListItem key={result.id}>
							{result.title}
						</ListItem>
						)
				})}
			</ListWrapper>
		)
	};

	calculateResults = () => {

	};

	handleChange = (value) => {
		console.log('value change', value);
		this.props.setCurrentSearch(value)
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
	padding-left: 60px;
	color: #000000;
	background-color: #FFFFFF;
	opacity: 1;
	
`;

const SearchIcon = styled.div`
	position: absolute;
	margin-left: 10px;
	left:0;
`;

const ListItem = styled(flexDefault)`
	padding: 0 0 0 60px;
  width: 40vw;
`;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: #FFFFFF;
	position: absolute;
	top: 65px;
`;