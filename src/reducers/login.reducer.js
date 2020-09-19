import { AccordionActions } from "@material-ui/core";

const initalState = {
    email: 'email',
    password: 'password'
};

export default (state= initalState, action={}) => {
    switch(action.type) {
        default: 
        return {
            state
        };
    };
};