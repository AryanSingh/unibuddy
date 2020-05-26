import React, {Component} from 'react';
import styled from 'styled-components';
import { TiMessages } from 'react-icons/ti';
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
	opacity: .2;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const IconContainer = styled(flexDefault)`
	
`;

const HeaderTextWrapper = styled(flexDefault)`
	
	
`;

const HeaderText = styled.p`
	font-family: Roboto;
	font-size: 24px;
	font-weight: 400;
	color: #FFFFFF;
`;
