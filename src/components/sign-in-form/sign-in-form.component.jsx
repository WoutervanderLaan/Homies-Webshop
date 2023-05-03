import { useState } from "react";
import {
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.compenent";

import "./sign-in-form.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormValues);
  const { password, email } = formFields;

  const signInWIthGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setFormField(defaultFormValues);
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>I have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWIthGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
