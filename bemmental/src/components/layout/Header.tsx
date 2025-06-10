import { type FunctionComponent, useCallback } from 'react';
import '../styles/header.css';


const Header:FunctionComponent = () => {
  	
  	const onButtonContainerClick = useCallback(() => {
    		// adicionar lógica para o clique do botão;
  	}, []);
  	
	return (
			<div className="header">
				<img className="bemMental2" alt="" src="Bem Mental 2.png" />
				<div className="headerAuth">
						<div className="button" onClick={onButtonContainerClick}>
							<div className="button1">Registrar</div>
						</div>
						<div className="button2">
							<div className="button1">Entrar</div>
						</div>
				</div>
			</div>
	);
};

export default Header;
