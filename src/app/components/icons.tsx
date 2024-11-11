import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faBars, faX, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp, faFreeCodeCamp, faCodepen } from '@fortawesome/free-brands-svg-icons';

type SelectedSelectType = {
  IconName: string;
  width?:number;
  height?:number;
};
const ControlledIcons: React.FC<SelectedSelectType> = ({IconName,width,height}) =>{
  let icon: JSX.Element | null = null;
  switch(IconName){
     

      case "github":
              icon = 
                <FontAwesomeIcon 
                  width={`${width !== null ? width : null}`} 
                  height={`${height !== null ? height : null}`} 
                  icon={faGithub} 
                />
      break;
      
      case "linkedin":
              icon = 
                <FontAwesomeIcon
                  width={`${width !== null ? width : null}`} 
                  height={`${height !== null ? height : null}`} 
                  icon={faLinkedin} 
                />
      break;

      case "frontendmentor":
                  icon = <svg xmlns="http://www.w3.org/2000/svg" width={`${width !== null ? width : null}`} height={`${height !== null ? height : null}`} >
                    <path fill="currentColor" d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z"/></svg>
      break;

      case "whatsapp":
                  icon = 
                  <FontAwesomeIcon 
                    width={`${width !== null ? width : null}`} 
                    height={`${height !== null ? height : null}`} 
                    icon={faWhatsapp} 
                  />
      break;

      case "FreeCodeCamp":
                  icon = 
                    <FontAwesomeIcon 
                      width={`${width !== null ? width : null}`} 
                      height={`${height !== null ? height : null}`} 
                      icon={faFreeCodeCamp} 
                    />
      break;

      case "CodePen":
                  icon = 
                    <FontAwesomeIcon 
                      width={`${width !== null ? width : null}`} 
                      height={`${height !== null ? height : null}`} 
                      icon={faCodepen} 
                    />
      break;

      case "Bars":
                  icon = 
                    <FontAwesomeIcon 
                        width={`${width !== null ? width : null}`} 
                        height={`${height !== null ? height : null}`} 
                        icon={faBars} 
                    />
      break;

      case "closeX":
              icon = 
              <FontAwesomeIcon 
                width={`${width !== null ? width : null}`} 
                height={`${height !== null ? height : null}`}
                icon={faX} 
              />
      break;

      case "inputerror":
        icon = 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11.5" stroke="currentColor"/>
          <rect x="11" y="6" width="2" height="9" rx="1" fill="currentColor"/>
          <rect x="11" y="17" width="2" height="2" rx="1" fill="currentColor"/>
        </svg>
      break;

      case "briefcase":
        icon = 
        <FontAwesomeIcon 
          width={`${width !== null ? width : null}`} 
          height={`${height !== null ? height : null}`}
          icon={faBriefcase} 
        />
      break;

      case "graduation":
        icon = 
        <FontAwesomeIcon 
          width={`${width !== null ? width : null}`} 
          height={`${height !== null ? height : null}`}
          icon={faGraduationCap} 
        />
      break;

  }

  return icon;
}
export default ControlledIcons;