import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/Actions';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  const deadlineRegex = /^\d{4}-\d{2}-\d{2}/;

  if (!values.title) {
    errors.title = 'Required';
  } else if (!deadlineRegex.test(values.title)) {
    errors.title = 'Title must start with a date (YYYY-MM-DD)';
  }

  if (!values.description) {
    errors.description = 'Required';
  }

  return errors;
};

function TaskForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      const errors = validate(values);
      
      if (Object.keys(errors).length) {
        window.alert(Object.values(errors).join('\n'));
      } else {
        const newTask = { id: Date.now(), ...values };
        dispatch(addTask(newTask));
        formik.resetForm();
      }
      
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="task-form">
      <h2>Add New Task</h2>
      <label htmlFor="taskTitle">Title</label>
      <input
        type="text"
        id="taskTitle"
        {...formik.getFieldProps('title')}
        required
      />
      {formik.touched.title && formik.errors.title ? (
        <div className="error">{formik.errors.title}</div>
      ) : null}

      <label htmlFor="taskDescription">Description</label>
      <textarea
        id="taskDescription"
        {...formik.getFieldProps('description')}
        required
      />
      {formik.touched.description && formik.errors.description ? (
        <div className="error">{formik.errors.description}</div>
      ) : null}

      <button type="submit" disabled={formik.isSubmitting}>Add Task</button>
    </form>
  );
}

export default TaskForm;