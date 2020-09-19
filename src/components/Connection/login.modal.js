import React, {useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';

import './login.style.css';


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
    };
  
  const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ ;


  


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Connexion
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
                <h2 id="transition-modal-title" className="title--modal--connection">Connexion</h2>
            </div>
            <form 
                className="form--connection" onSubmit={(e) => {
                  e.preventDefault();
                  }}>
        
                <div className="mail form-group row ">
                   <input 
                       type="email" 
                       placeholder="Email" 
                       id="mail--connection" 
                       className="col-lg-12"
                         
                       
                    />
                    <span className="regex--email"></span>
                </div>
                <div className="password form-group row">
                   <input 
                       type="password" 
                       placeholder="Mot de passe" 
                       id="password--connection" 
                       className="col-lg-12" 
                       
                    />
                    <span className='regex--password--connection'></span>
                </div>
               
               <button id="button--form--connection" type="submit"> Je m'inscris </button>

               <div id="message--form--connection">
                
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
