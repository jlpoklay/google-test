import React from 'react';
import GoogleSignIn from './auth/GoogleSignIn';
const Landing = () => {
return (
<div column center middle gap={1} height="100vh" width="100%">
<h3>Authenticate to continue</h3>
<GoogleSignIn/>
</div>);
}
export default Landing;