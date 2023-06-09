import React from 'react'
import {Field, Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import _identity from 'lodash/identity'

const validationScheme = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is Required'),
    deadline: Yup.date().required('Date is required')
})

const initialValues = {
    title: '',
    description: '',
    deadline: '',
}

export const ToDoForm = ({onSubmit = _identity}) => {

    const onFormSubmit = (values, { resetForm }) => {
        onSubmit(values);
        resetForm(); // Reset the form after submission
      };

    return <div>
        <Formik initialValues={initialValues } onSubmit={onFormSubmit} validationSchema={validationScheme}>
            <Form>
                <div>
                    <label>Title</label>
                    <Field type='text' name="title"/>
                    <ErrorMessage name='title' component="div"/>
                </div>
                <div>
                    <label>Description</label>
                    <Field type='text' name="description"/>
                    <ErrorMessage name='description' component="div"/>
                </div>
                <div>
                    <label>Deadline</label>
                    <Field type='date' name="deadline"/>
                    <ErrorMessage name='deadline' component="div"/>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
}

