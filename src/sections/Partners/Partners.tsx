import React from 'react'; 
import './Partners.scss'; 
import Exablack from '../../assets/exablack.png';
import Ideplan from '../../assets/ideplan.png';
import Nowee from '../../assets/nowee.png';

const Partners = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(

        <>
            <div ref={ref} className="partners" id="parceiros">

                <div className="partners__title">
                    <h1>Clientes e parceiros</h1>
                    <h1 style={{color: '#fff'}}>excelentes</h1>
                    <h1>nos ajudam na trajetória</h1>
                </div>

                <ul className="partners__list">
                    <li className="partners__list--item">
                        <img src={Exablack} alt="Exablack"/>
                        <p>Parceira em automação de processos BPM e Desenvolvimento de Software</p>
                        <p>Desenvolvimento de Marketplace Nacional do SENAI Nacional, plataforma de tendências de moda, plataforma de roadmaps tecnológicos da área de química e aplicativo de avaliação de empresas têxteis</p>
                    </li>
                    <li className="partners__list--item" style={{marginBottom: '100px', marginTop: '100px'}}>
                        <img src={Ideplan}  alt="Ideplan"/>
                        <p>Desenvolvimento de plataforma para planejamento urbano na Redenção, Pará</p>
                    </li>
                    <li className="partners__list--item">
                        <img src={Nowee} alt="Nowee"/>
                        <p>Desenvolvimento de plataforma para escola de inglês online </p>
                    </li>
                </ul>
                    
            </div>
        </>
    )
});

export default Partners; 