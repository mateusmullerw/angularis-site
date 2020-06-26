import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import './Form.scss';

const ScheduleFormView = (props: any) => {
  const { handleSubmit } = props;

  const handleChange = () => {

  }
  
  return (
    <form onSubmit={handleSubmit} className="form">
          <TextField 
            classes={{root: "form__input"}}
            id="outlined-size-normal" 
            variant="outlined" 
            placeholder="Nome *" />
          <TextField  
            className="form__input"
            id="outlined-size-normal" variant="outlined" placeholder="E-mail *" />
          <TextField  
            className="form__input" 
            id="outlined-size-normal" variant="outlined" placeholder="Empresa" />
          <TextField   
            className="form__input"
            id="outlined-size-normal" variant="outlined" placeholder="Telefone" />

          <NativeSelect
              className="form__select"
              value={''}
              name="interest"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'interest' }}
              variant="outlined"
            >
              <option value="" disabled>
                Estou interessado em
              </option>
              <option value={1}>Desenvolvimento de plataforma web </option>
              <option value={2}>Desenvolvimento de site</option>
              <option value={3}>Desenvolvimento de loja virtual</option>
              <option value={4}>Desenvolvimento de aplicativo</option>
              <option value={5}>Serviço de design UX/UI</option>
              <option value={6}>Serviço de infraestrutura</option>
              <option value={7}>Serviço de gestão de projetos</option>
              <option value={8}>Consultoria tecnológica</option>
    
            </NativeSelect>

            <Button className="form__button">Enviar</Button>
    </form>
  );
};

export default ScheduleFormView;
