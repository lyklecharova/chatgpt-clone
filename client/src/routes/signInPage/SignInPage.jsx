import { SignIn } from '@clerk/clerk-react';
import './signInPage.css';

const SignInPage = () => {
    return (
        <div className="signInPage">
            <SignIn
                path="/sign-in"
                signInUrl="/sign-up"
                forceRedirectUrl="/dashboard"
            />
        </div>
    );
};

export default SignInPage;
