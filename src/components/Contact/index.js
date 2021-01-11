import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact () {
// Hooks to manage form data 
// The initial state should be an empty form thus what is set in the useState function
const [formState, setFormState] = useState({name: '', email: '', message: ''});

// Let's use the useState Hook to handle the error state.
const [errorMessage, setErrorMessage] = useState('');

// This is a good case where we can destructure the formState object into its named properties, name, email, and message. 
const { name, email, message } = formState;

// This will handle any changes that occur in the form 
// We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. 
// Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
// The name property of target in the preceding expression actually refers to the name attribute of the form element. 
// This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
function handleChange(e) {
  if (e.target.name === 'email') {
    const isValid = validateEmail(e.target.value);
    if (!isValid) {
      setErrorMessage('Your email is invalid.');
    } else {
      setErrorMessage('');
    }
  } else {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage('');
    }
  }
  if (!errorMessage) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log('Handle Form', formState);
  }
};
    
  
function handleSubmit(e) {
  e.preventDefault();
  if (!errorMessage) {
    console.log('Submit Form', formState);
  }
};

return (
    <section className="bg-contact bg-cover pt-20 pb-20 pl-6 pr-6">
      <h2 className="flex justify-center text-blue-500 text-5xl pb-6">Contact me</h2>
      <form id="contact-form" className="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 rounded" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
                <label htmlFor="name">Name:</label>
                <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
                <label htmlFor="email">Email address:</label>
                <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">    
                <label htmlFor="message">Message:</label>
                <textarea className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact