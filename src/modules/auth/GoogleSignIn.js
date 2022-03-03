import React from 'react';
import { Auth } from 'aws-amplify';
import btn from './googleBtn.png';
const GoogleSignIn = () => {
return (
<button onClick={() => Auth.federatedSignIn({ provider:"Google" })}>
<img src={btn} alt="Google Sign In button"
     className="googleSignIn"
     style={{height:"45px", width:"190px"}}/>
</button>
);
}
export default GoogleSignIn;