"use client";

import { useState } from "react";
import ResetPassword from "../authComponents/ResetPassword";
import SendResetCode from "../authComponents/SendResetCode";
import VerifyResetPassword from "../authComponents/VerifyResetPassword";


const ForgetPassword = () => {
    const [isCodeSent, setIsCodeSent] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  return (
      <div>
        {!isCodeSent ? (
          <SendResetCode setIsCodeSent={setIsCodeSent} />
        ) : !isResettingPassword ? (
          <VerifyResetPassword
            setIsResettingPassword={setIsResettingPassword}
          />
        ) : (
          <ResetPassword />
        )}
      </div>
  );
}
export default ForgetPassword;
