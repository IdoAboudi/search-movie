import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './SearchBar.css'

class SearchBar extends React.Component {

    renderError = ({ error, touched }) => {

        if (touched && error) {

            return (
                <div className="error">{error}</div>
            )
        }
    }

    renderTitle = ({ input, meta, placeholder }) => {
        return (
            <div className="input-title">
                <input className="form-control" placeholder={placeholder} {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderYear = ({ input, placeholder }) => {
        return (
            <div className="input-year">
                <input className="form-control" placeholder={placeholder} {...input} autoComplete="off" />
            </div>
        )
    }
    //Submit the form values to the parent component
    onSubmit = formValues => {
        this.props.onFormSubmit(formValues)
    }
    //Reset the form values and the parent component state
    reset = () => {
        this.props.reset()
        this.props.resetApp()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <div className="search-bar input-group">
                        <Field
                            name="title"
                            component={this.renderTitle}
                            placeholder="Enter title"
                        />
                        <Field
                            name="realseYear"
                            component={this.renderYear}
                            placeholder="Enter year of realese"
                        />
                    </div>
                        <button
                        className="btn btn-outline-primary"
                            type="submit"
                            disabled={this.props.submitting || this.props.pristine }
                        >Submit
                        </button>
                        <button
                        className="btn btn-outline-secondary"
                            onClick={this.reset}
                            disabled={this.props.submitting || this.props.pristine }
                            type="button"
                        >Reset
                        </button>
                    
                </form>
            </div>
        )
    }
}

//Form fields validation
const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = '*Required'
    }

    return errors;
}

export default reduxForm({
    form: 'movieSearch',
    validate
})(SearchBar)