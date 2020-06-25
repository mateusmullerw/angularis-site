import React from 'react'; 
import './Services.scss'; 
import Header from '../Header/Header';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import DashboardIcon from '../../assets/icons/dashboard_1x.png';
import SupportIcon from '../../assets/icons/headphone-alt_1x.png';
import ProjectsIcon from '../../assets/icons/rocket_1x.png';
import InfraIcon from '../../assets/icons/database_1x.png';
import UXUIcon from '../../assets/icons/ux_1x.png';
import DevIcon from '../../assets/icons/code_1x.png';


const Services = () => {
    return (
        <>
        <Header black={false}/>
        <div className="services"> 

            <div className="services__title">
                <h1 style={{color: '#FFFFFF' }}>Tudo que você precisa para sua </h1> 
                <h1 style={{color: '#F06F62', width: 0 }} >transformação digital</h1>
            </div>

            <div className="services__listContainer">

                <div className="services__listContainer--item">

                    <div className="services--serviceItem">
                        <img src={DashboardIcon} alt="Testes e performance"/>
                        <div  className="services--serviceItem__text">
                            <h4>Testes e performance</h4>
                            <p>Garantem a qualidade do seu produto</p>
                        </div>
                   </div>

                   <div className="services--serviceItem">
                        <img src={InfraIcon} alt="Infraestrutura e hospedagem" />
                        <div  className="services--serviceItem__text">
                            <h4>Infraestrutura e hospedagem</h4>
                            <p>Manutenção, monitoramento e segurança para o seu produto</p>
                        </div>
                   </div>

                </div>
                    
                <div className="services__listContainer--item">
                    <div className="services--serviceItem">
                        <img src={SupportIcon} alt="Suporte" />
                        <div  className="services--serviceItem__text">
                            <h4>Suporte</h4>
                            <p>Pode ligar a qualquer hora, estamos aqui para você 24/7 </p>
                        </div>
                   </div>

                   <div className="services--serviceItem">
                        <img src={UXUIcon} alt="UX e UI Design" />
                        <div  className="services--serviceItem__text">
                            <h4>UX e UI Design</h4>
                            <p>Interfáceis amigáveis para você e seus usuários navegarem</p>
                        </div>
                   </div>
                </div>

                <div className="services__listContainer--item">
                    <div className="services--serviceItem">
                        <img src={ProjectsIcon} alt="Projetos"/>
                        <div className="services--serviceItem__text">
                            <h4>Projetos</h4>
                            <p>Nossos gerentes estão prontos para ajudá-lo a iniciar o seu projeto</p>
                        </div>
                   </div>

                    <div className="services--serviceItem">
                        <img src={DevIcon} alt="Desenvolvimento"/>
                        <div className="services--serviceItem__text">
                            <h4>Desenvolvimento</h4>
                            <p>Stack amplo de desenvolvimento, encontramos solução para qualquer problema</p>
                        </div>
                   </div>

                </div>
                

            </div>
        </div>

            
        </>
    )
}

export default Services;