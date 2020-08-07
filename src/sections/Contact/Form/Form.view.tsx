import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import './Form.scss';
import InputMask from 'react-input-mask';

const ScheduleFormView = (props: any) => {

  const [interest, setInterest] = useState('');

  const {
    errors,
    touched,
    values,
    handleChange,
    handleSubmit,
  } = props;


  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInterest(event.target.value as string);
  };

  
  return (
    <form onSubmit={handleSubmit} className="form">

          <TextField 
            classes={{root: "form__input"}}
            id="outlined-size-normal" 
            variant="outlined" 
            placeholder={errors.name ? errors.name : "Nome *" }
            error={errors.name ? true : false}
            />

          <TextField  
            className="form__input"
            id="outlined-size-normal" 
            variant="outlined" 
            placeholder={errors.name ? errors.name : "E-mail *" }
            error={errors.email ? true : false} />

          <TextField  
            className="form__input" 
            id="outlined-size-normal" 
            variant="outlined" 
            placeholder="Empresa" />

          <InputMask
              mask={'(99) 99999-9999'}
            >
           {() => ( <TextField   
              className="form__input"
              id="outlined-size-normal" 
              variant="outlined" 
              placeholder="Telefone" />)}
          </InputMask>

        

          <NativeSelect
              className="form__select"
              value={interest}
              name="interest"
              onChange={handleSelectChange}
              inputProps={{ 'aria-label': 'interest' }}
              variant="outlined"
            >
              <option value="" disabled aria-label="none">
                Estou interessado em
              </option>
              <option value={1} >Desenvolvimento de plataforma web </option>
              <option value={2} >Desenvolvimento de site</option>
              <option value={3} >Desenvolvimento de loja virtual</option>
              <option value={4} >Desenvolvimento de aplicativo</option>
              <option value={5} >Serviço de design UX/UI</option>
              <option value={6} >Serviço de infraestrutura</option>
              <option value={7} >Serviço de gestão de projetos</option>
              <option value={8} >Consultoria tecnológica</option>
    
            </NativeSelect>

            <Button className="form__button" type="submit">Enviar</Button>
    </form>
  );
};

export default ScheduleFormView;
