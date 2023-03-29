import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import React from "react";

export const Login = () => {
    return(
        <div>
            <GoogleOAuthProvider clientId="855641053567-6c45au75irlq8kg5ujlors8ujdbi60g2.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                    }}
                    onError={()=>{
                        console.log('Login Failed');
                    }}
                />

            </GoogleOAuthProvider>

        </div>

    );

}