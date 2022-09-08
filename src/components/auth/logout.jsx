/* /src/components/auth/logout.jsx */

import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

export const Logout = () => (
    <AuthConsumer>

        {({ logout }) => {
            logout();
        }}
    </AuthConsumer>
);