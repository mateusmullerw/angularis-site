import React from 'react';
import './Services.scss';
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

    const CustomLeftArrow = ({ onClick, ...rest }: any) => {
        const {
          carouselState: { currentSlide, deviceType }
        } = rest;
        
        return <ArrowBackIosIcon onClick={() => onClick()} />;
    };

    const CustomRightArrow = ({ onClick, ...rest }: any) => {
    const {
        carouselState: { currentSlide, deviceType }
    } = rest;

    return <ArrowForwardIosIcon onClick={() => onClick()} />;
    };

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

                <Fade left>
                    <div className="services__title">
                        <h1 >Tudo que você precisa para sua </h1>
                        <h1 className="services__title--highlight" >transformação digital</h1>
                    </div>
                </Fade>


                <Carousel responsive={responsive}
                    autoPlay
                    infinite
                    containerClass="carousel-container"
                    arrows={true}
                   
                    >
                    {services.map(service => (
                        <ServiceItem
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </Carousel>
            </div>
        </>
    )
});

export default Services;