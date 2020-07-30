import React from 'react';
import './Services.scss';
import DashboardIcon from '../../assets/icons/dashboard_1x.png';
import SupportIcon from '../../assets/icons/headphone-alt_1x.png';
import ProjectsIcon from '../../assets/icons/rocket_1x.png';
import InfraIcon from '../../assets/icons/database_1x.png';
import UXUIcon from '../../assets/icons/ux_1x.png';
import DevIcon from '../../assets/icons/code_1x.png';
import Carousel from 'react-multi-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import apps from '../../assets/apps.png';
import development from '../../assets/development.png';
import devops from '../../assets/devops.png';
import ecommerce from '../../assets/ecommerce.png';
import infra from '../../assets/infra.png';
import performance from '../../assets/performance.png';
import powerbi from '../../assets/powerbi.png';
import projects from '../../assets/projects.png';
import support from '../../assets/support.png';
import uiux from '../../assets/uiux.png';
import webplataform from '../../assets/webplataform.png';
import website from '../../assets/website.png';

const services = [
    {
        image: projects,
        title: "Projetos",
        description: "Nossos gerentes estão prontos para ajudá-lo a iniciar o seu projeto"
    },
    {
        image: apps,
        title: "Aplicativos",
        description: ""
    },
    {
        image: ecommerce,
        title: "E-commerce",
        description: ""
    },
    {
        image: website,
        title: "Website",
        description: ""
    },
    {
        image: webplataform,
        title: "Plataforma web",
        description: ""
    },
    {
        image: support,
        title: "Suporte",
        description: "Pode ligar a qualquer hora, estamos aqui para você 24/7"
    },
    {
        image: infra,
        title: "Infraestrutura e Hospedagem",
        description: "Manutenção, monitoramento e segurança para o seu produto"
    },
    {
        image: uiux,
        title: "UX e UI Design",
        description: "Interfáceis amigáveis para você e seus usuários navegarem"
    },
    {
        image: performance,
        title: "Testes e Performance",
        description: "Garantem a qualidade do seu produto"
    },
    {
        image: development,
        title: "Desenvolvimento",
        description: "Stack amplo de desenvolvimento, encontramos solução para qualquer problema"
    },
    {
        image: devops,
        title: "DevOps",
        description: ""
    },
    {
        image: powerbi,
        title: "Power BI",
        description: ""
    },
]

const ServiceItem = (props: any) => {

    return (
        <div className="services__item" >
            <img src={props.image} alt="ilustração" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
const Services = React.forwardRef<HTMLDivElement>((props, ref) => {

    const Fade = require('react-reveal/Fade');

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div ref={ref} className="services" id="services">
                {/* <div ref={ref} className="partners" id="parceiros"> */}

                <Fade left>
                    <div className="services__title">
                        <h1 >Tudo que você precisa para sua </h1>
                        <h1 className="services__title--highlight" >transformação digital</h1>
                    </div>
                </Fade>


                {/* </div> */}
                <Carousel responsive={responsive}
                    autoPlay
                    infinite
                    containerClass="carousel-container"
                    customRightArrow={<ArrowForwardIosIcon />}
                    customLeftArrow={<ArrowBackIosIcon />}>
                    {services.map(service => (
                        <ServiceItem
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </Carousel>
            </div>

            {/* <div ref={ref} className="services" id="services">
                <Fade left>
                    <div className="services__title">
                        <h1 >Tudo que você precisa para sua </h1>
                        <h1 className="services__title--highlight" >transformação digital</h1>
                    </div>
                </Fade>
                <Fade bottom cascade>


                    <div className="services__listContainer">

                        <div className="services__listContainer--item">

                            <div className="services--serviceItem">
                                <img src={DashboardIcon} alt="Testes e performance" />
                                <div className="services--serviceItem__text">
                                    <h4>Testes e performance</h4>
                                    <p>Garantem a qualidade do seu produto</p>
                                </div>
                            </div>

                            <div className="services--serviceItem">
                                <img src={InfraIcon} alt="Infraestrutura e hospedagem" />
                                <div className="services--serviceItem__text">
                                    <h4>Infraestrutura e hospedagem</h4>
                                    <p>Manutenção, monitoramento e segurança para o seu produto</p>
                                </div>
                            </div>

                        </div>

                        <div className="services__listContainer--item">
                            <div className="services--serviceItem">
                                <img src={SupportIcon} alt="Suporte" />
                                <div className="services--serviceItem__text">
                                    <h4>Suporte</h4>
                                    <p>Pode ligar a qualquer hora, estamos aqui para você 24/7 </p>
                                </div>
                            </div>

                            <div className="services--serviceItem">
                                <img src={UXUIcon} alt="UX e UI Design" />
                                <div className="services--serviceItem__text">
                                    <h4>UX e UI Design</h4>
                                    <p>Interfáceis amigáveis para você e seus usuários navegarem</p>
                                </div>
                            </div>
                        </div>

                        <div className="services__listContainer--item">
                            <div className="services--serviceItem">
                                <img src={ProjectsIcon} alt="Projetos" />
                                <div className="services--serviceItem__text">
                                    <h4>Projetos</h4>
                                    <p>Nossos gerentes estão prontos para ajudá-lo a iniciar o seu projeto</p>
                                </div>
                            </div>

                            <div className="services--serviceItem">
                                <img src={DevIcon} alt="Desenvolvimento" />
                                <div className="services--serviceItem__text">
                                    <h4>Desenvolvimento</h4>
                                    <p>Stack amplo de desenvolvimento, encontramos solução para qualquer problema</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </Fade>
            </div> */}


        </>
    )
});

export default Services;