import './Products.scss'; 
import React from 'react'; 
import Bonita from '../../assets/bonita.png';
import Magento from '../../assets/magento.png';
import Liferay from '../../assets/liferay.png';

const Products = () => {
    return (
       <section className="products">
           <h1>Os produtos que você precisa para o desenvolvimento dos seus projetos</h1>

           <div className="products__container">
               <img style={{marginBottom: '-3%'}} src={Bonita}/>
               <img src={Magento}/>
               <img style={{marginBottom: '-3%'}} src={Liferay}/>
           </div>

       </section>
    )
}


export default Products;