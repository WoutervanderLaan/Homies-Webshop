import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Log in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

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
