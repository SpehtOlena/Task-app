import styled from 'styled-components';
import EdiText from 'react-editext';

const StyledEdiText = styled(EdiText)`

button {
  border-radius: 5px;
  text-decoration: none;
}
button[editext="edit-button"] {
  color: #000;
  width: 75px;
}
button[editext="save-button"] {
  width: 50px;
  font-size: 17px;
  &:hover {
	 background: #A8D2A5 ;
  }
}
button[editext="cancel-button"] {
	font-size: 17px;
	margin-right: 8px;
  &:hover {
	color: #800202;
	 
  }
}
input, textarea {
  background: #fff;
  color: #689964;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  font-family: Monda;
  font-size: inherit;
  padding: 0px;
  
}
div[editext="view-container"], div[editext="edit-container"] {
  background: #fff;
  border-radius: 5px;
  color: ;#3E3B3B;
  font-family: Monda;
 }
 div[editext="view"]{
	overflow: hidden;
	text-overflow: ellipsis;	
	max-width: 450px;
  }
&.task-uncomplete {
	color: #C4C4C4;
}
@media (max-width: 1024px) {
	div[editext="view"]{
		overflow: hidden;
		text-overflow: ellipsis;	
		max-width: 400px;
	  }
@media (max-width: 768px) {
	div[editext="view"]{
		overflow: hidden;
		text-overflow: ellipsis;	
		max-width: 200px;
		font-size: 14px;
	  }
@media (max-width: 480px) {
	div[editext="view"]{
		overflow: hidden;
		text-overflow: ellipsis;	
		max-width: 120px;
	  }
	  @media (max-width: 320px) {
		div[editext="view"]{
			overflow: hidden;
			text-overflow: ellipsis;	
			max-width: 90px;
		  }
}
`

export default StyledEdiText