import styled from 'styled-components';

export const Wrapper = styled.div`
	width:100%;

	height:      ${props => props.type === 'creator' && '5.5rem' };
	white-space: ${props => props.type === 'creator' && 'nowrap' };
	overflow-y:  ${props => props.type === 'creator' ? 'hidden' : 'scroll' };
	overflow-x:  ${props => props.type === 'creator' && 'scroll' };

	align-self:  ${props => props.type === 'saved' && 'flex-start'};
	

	::-webkit-scrollbar { 
    	display: none; 
	}

	> div {
		margin: ${props => props.type === 'creator' ? '0 calc((100% - 22rem)/8);' : 'calc((100% - 22rem)/8) calc((100% - 22rem)/8)'};
		display:inline-block;
	}
`;