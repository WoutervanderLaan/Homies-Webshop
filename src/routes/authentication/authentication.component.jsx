import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

///////////////// Previous version incl. async in useEffect: /////////////////

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//       auth,
//     signInWithGooglePopup,
//     createUserDocumentFromAuth,
//       signInWithGoogleRedirect,
//   } from "../../utils/firebase/firebase.utils";

//   const SignIn = () => {
//       useEffect(() => {
//         const fetchRedirect = async () => {
//           const response = await getRedirectResult(auth);
//           if (response) {
//             const userDocRef = await createUserDocumentFromAuth(response.user);
//             return response;
//           }
//         };

//         fetchRedirect()
//           .then((res) => {
//             if (res) console.log(res);
//           })
//           .catch((err) => console.error(err));
//       }, []);

//     const logGoogleUser = async () => {
//       try {
//         const { user } = await signInWithGooglePopup();
//         const userDocRef = await createUserDocumentFromAuth(user);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     return (
//       <div>
//         <h1>Sign in Page</h1>
//         <button onClick={logGoogleUser}>Log in with Google Popup</button>
//         <button onClick={signInWithGoogleRedirect}>
//           Log in with Google Redirect
//         </button>
//       </div>
//     );
//   };

//   export default SignIn;
