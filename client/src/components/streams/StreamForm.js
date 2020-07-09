import React from 'react';
import { Field,reduxForm } from 'redux-form';


class StreamForm extends React.Component{
    renderError({error, touched}){
        if(error && touched){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput= ({input, label, meta}) =>{ 
        const className=`field ${meta.touched && meta.error ? 'error':''}`;
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit= (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return(
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title"></Field>
                    <Field name="description" component={this.renderInput} label="Enter Description"></Field>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a valid title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a valid description';
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

