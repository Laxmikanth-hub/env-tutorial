/* /src/components/auth/callback.jsx */
import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

export const Callback = () => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {
            //signinRedirectCallback();
            return <span>This is Sign In Page </span>;
        }}
    </AuthConsumer>
);