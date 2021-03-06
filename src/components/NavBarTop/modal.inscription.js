import React, {useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';

import './modal.inscription.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    padding: '8%',
    width: '500px'

  },
}));

const TransitionsModal = ({...state}) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    state.restart()
    };
  
  const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ;

  const REGEX_NAME = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/ ;

  

  const testRegex = (email) => {
     const result = REGEX_EMAIL.test(email);
     const regexEmail = document.querySelector('.regex--email') ;

     if(result === false) {
       regexEmail.textContent = 'Veuillez entrer une adresse mail valide';
       regexEmail.style.color = 'red'
     } else {
      regexEmail.textContent = 'Adresse mail valide';
      regexEmail.style.color = 'green'   
    }
  }

  const regexPassword = (password) => {
    const result = REGEX_PASSWORD.test(password);
    const regexPassword = document.querySelector('.regex--password');
    const spanSecondPass = document.querySelector('.check--firstPassword');
    const secondMdp = document.getElementById('checkPassword');


    if(result === false) {
      regexPassword.textContent = 'Minimum huit caractères dont une lettre et un chiffre minimum' ;
      regexPassword.style.color = 'red'
    } else {
      regexPassword.textContent = 'Mot de passe valide' ;
      regexPassword.style.color = 'green';
    }

    if(secondMdp.value !='' && password === secondMdp.value) {
      spanSecondPass.textContent = 'Mot de passe correspond';
      spanSecondPass.style.color = 'green';
    } else if(secondMdp.value !='' && password != secondMdp.value) {
      spanSecondPass.textContent = 'Le mot de passe ne correspond pas';
      spanSecondPass.style.color = 'red';
    }
  }

  const checkPassword = (password) => {
    const firstPassword = document.getElementById('password').value;
    const checkPass = document.querySelector('.check--firstPassword');

    if(password !== firstPassword) {
      checkPass.textContent = 'Le mot de passe ne correspond pas';
      checkPass.style.color = 'red';
    } else {
      checkPass.textContent = 'Mot de passe correspond';
      checkPass.style.color = 'green';
    }
  }


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Inscription
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="close--modal">
                <span onClick={() => handleClose()}>x</span>
                <h2 id="transition-modal-title" className="title--modal--inscription">Inscription</h2>
            </div>
            <form className="form--inscription" onSubmit={(e) => {
              e.preventDefault();
              const message = document.getElementById('message--form') ;
              if(state.email != '' && state.password !='' && state.name !='' && state.verifPass != '' && state.password === state.verifPass && REGEX_PASSWORD.test(state.password) === true && REGEX_PASSWORD.test(state.verifPass) === true && REGEX_NAME.test(state.name) === true ) {
                  message.classList.remove('check--form--false');
                  message.textContent = '';
                  state.checkApi();
              } else {                       
                message.classList.add('check--form--false');
                message.textContent = 'Certains champs sont invalides';
              }
            } }>
               <div className="username form-group row">
                   <input type="username" placeholder="Nom" id="username" className="col-lg-12" value={state.name} onChange={(event) => state.changeName(event.target.value)}/>
                </div>
                <div className="mail form-group row ">
                   <input 
                       type="email" 
                       placeholder="Email" 
                       id="mail" 
                       className="col-lg-12"  
                       value={state.email} 
                       onChange={(event) => {
                         state.changeEmail(event.target.value);
                        }}
                        onBlur ={ (event) => {
                          testRegex(event.target.value);
                        }}
                    />
                    <span className="regex--email"></span>
                </div>
                <div className="password form-group row">
                   <input 
                       type="password" 
                       placeholder="Mot de passe" 
                       id="password" 
                       className="col-lg-12" 
                       value={state.password} 
                       onChange={(event) => {
                         state.changePassword(event.target.value);
                         regexPassword(event.target.value)

                         }}
                    />
                    <span className='regex--password'></span>
                </div>
                <div className="check--password form-group row ">
                   <input 
                       type="password" 
                       placeholder="Vérification mot de passe" 
                       id="checkPassword" className="col-lg-12" 
                       value={state.verifPass} 
                       onChange={(event) => {
                         state.changeVerifPass(event.target.value);
                         checkPassword(event.target.value);
                         }}
                    />
                    <span className="check--firstPassword"></span>
                </div>
                <div className="form-check form-group">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={state.isCompany} onChange={() => state.changeIsCompany()} />
                    <label className="form-check-label" htmlFor="exampleCheck1" onChange={() => state.changeIsCompany()}>Je suis une entreprise</label>
               </div>
               <button id="button--form" type="submit"> Je m'inscris </button>

               <div id="message--form" className={state.isRegister === 'oui' ? 'api--succes' :''|| state.isRegister === 'non' ? 'api--denied':''}>
                 {
                    state.isRegister === 'oui' ? 'Inscription validée' :''|| state.isRegister === 'non' ? 'Inscription refusée':''
                 }
               </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  state: PropTypes.objectOf(PropTypes.any)
}
  export default TransitionsModal ;
