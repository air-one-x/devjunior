import React, {useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    padding: '8%'

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
                  <h2 id="transition-modal-title" className="title--modal--inscription">Inscription</h2>
            <div className="form--inscription">
               <div className="username form-group row">
                   <input type="username" placeholder="Nom" id="username" className="col-lg-12" value={state.name} onChange={(event) => state.changeName(event.target.value)}/>
                </div>
                <div className="mail form-group row ">
                   <input type="email" placeholder="email" id="mail" className="col-lg-12" value={state.email} onChange={(event) => state.changeEmail(event.target.value)}/>
                </div>
                <div className="password form-group row">
                   <input type="password" placeholder="Mot de passe" id="password" className="col-lg-12" value={state.password} onChange={(event) => state.changePassword(event.target.value)}/>
                </div>
                <div className="check--password form-group row ">
                   <input type="password" placeholder="Vérification mot de passe" id="checkPassword" className="col-lg-12" value={state.verifPass} onChange={(event) => state.changeVerifPass(event.target.value)}/>
                </div>
                <div className="form-check form-group">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={state.isCompany} onChange={() => state.changeIsCompany()} />
                    <label className="form-check-label" htmlFor="exampleCheck1" onChange={() => state.changeIsCompany()}>Je suis une entreprise</label>
               </div>
               <button onClick={state.checkApi}>Je m'inscris</button>
               <div className={state.isRegister === 'oui' ? 'api--succes' :''|| state.isRegister === 'non' ? 'api--denied':''}>
                 {
                    state.isRegister === 'oui' ? 'Inscription validée' :''|| state.isRegister === 'non' ? 'Inscription refusée':''
                 }
               </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
  export default TransitionsModal ;
