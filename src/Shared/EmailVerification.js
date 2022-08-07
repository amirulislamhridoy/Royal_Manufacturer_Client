import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import auth from "../firebase_init";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "./Loading";

const EmailVerification = () => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(sending){
        <Loading />
    }
  const resendEmailVerification = async () => {
    const email = user?.email;
    await sendEmailVerification(email);
    toast.success("Resend Email Verification is successful.");
  };

  return (
    <main>
      <Helmet>
        <title>Purchase - Verify Email</title>
      </Helmet>
      <Header />
      <section className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-actions justify-end">
              <button
                onClick={resendEmailVerification}
                className="btn btn-primary w-full"
              >
                Resend Email Verification
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmailVerification;
