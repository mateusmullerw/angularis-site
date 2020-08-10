import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import './Form.scss';
import InputMask from 'react-input-mask';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';


const ScheduleFormView = (props: any) => {

  const [interest, setInterest] = useState('');

  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur, 
    handleSubmit,
  } = props;


  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInterest(event.target.value as string);
    const filteredInterest = interestOptions.filter(interest => interest.value == event.target.value);
    if(filteredInterest.length > 0){
      values.interest = filteredInterest[0].label
    }
  };

  const interestOptions = [
    {label: 'Desenvolvimento de plataforma web', value: 1},
    {label: 'Desenvolvimento de site', value: 2},
    {label: 'Desenvolvimento de loja virtual', value: 3},
    {label: 'Desenvolvimento de aplicativo', value: 4},
    {label: 'Serviço de design UX/UI', value: 5},
    {label: 'Serviço de infraestrutura', value: 6},
    {label: 'Serviço de gestão de projetos', value: 7},
    {label: 'Consultoria tecnológica', value: 8}
  ]

  
  return (
    <form onSubmit={handleSubmit} className="form">
          { props.isOk &&  
            <div className="confirm">
              <h1 >Email enviado!</h1>
              <CloseIcon style={{color: '#fff', cursor: 'pointer'}} fontSize="default" onClick={props.closeAlert}/>
            </div>
          }
          
         
          <TextField 
            classes={{root: "form__input"}}
            id="outlined-size-normal" 
            name="name"
            variant="outlined" 
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={errors.name ? errors.name : "Nome *" }
            error={errors.name ? true : false}
            />

          <TextField  
            className="form__input"
            id="outlined-size-normal" 
            variant="outlined" 
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={errors.name ? errors.name : "E-mail *" }
            error={errors.email ? true : false} />

          <TextField  
            className="form__input" 
            id="outlined-size-normal" 
            variant="outlined" 
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Empresa" />

          <InputMask
              mask={'(99) 99999-9999'}
              onChange={handleChange}
              onBlur={handleBlur}
              name="phone"
              value={values.phone}
            >
           {() => ( <TextField   
              className="form__input"
              id="outlined-size-normal" 
              variant="outlined" 
              onChange={handleChange}
              onBlur={handleBlur}
              name="phone"
              value={values.phone}
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
             {interestOptions.map(interest => {
              return <option value={interest.value}>{interest.label}</option>
             })}
    
            </NativeSelect>

            <Button className="form__button" type="submit">
              {
                props.isLoading ? <CircularProgress/> : 'Enviar' 
              }
            </Button>
    </form>
  );
};

export default ScheduleFormView;
