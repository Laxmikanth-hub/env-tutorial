/* /src/components/auth/silentRenew.jsx */

import React from "react";
import { AuthConsumer } from "../../providers/authProvider";
export const SilentRenew = () => (
    <AuthConsumer>
        {({ signinSilentCallback }) => {
            signinSilentCallback();
            return <span>loading.. Silent Renew Page</span>;
        }}
    </AuthConsumer>
);