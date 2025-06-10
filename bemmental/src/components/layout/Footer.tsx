import type { FunctionComponent } from 'react';
import '../styles/footer.css';


const Footer:FunctionComponent = () => {
  	return (
    		<div className="footer">
      			<div className="exclude">
        				<div className="title">
          					<img className="figmaIcon" alt="" src="Figma.svg" />
          					<div className="buttonList">
            						<img className="xLogoIcon" alt="" src="X Logo.svg" />
            						<img className="logoInstagramIcon" alt="" src="Logo Instagram.svg" />
            						<img className="logoYoutubeIcon" alt="" src="Logo YouTube.svg" />
            						<img className="linkedinIcon" alt="" src="LinkedIn.svg" />
          					</div>
        				</div>
      			</div>
      			<div className="copyrightBemMental">Copyright Bem Mental - @2025. Todos os direitos reservados.</div>
      			<div className="groupParent">
        				<div className="textLinkListItemWrapper">
          					<div className="textLinkListItemWrapper">
            						<div className="listItem">Politíca de Privacidade</div>
          					</div>
        				</div>
        				<div className="textLinkListItem1">
          					<div className="listItem">Termos de Uso</div>
        				</div>
      			</div>
    		</div>);
};

export default Footer;
