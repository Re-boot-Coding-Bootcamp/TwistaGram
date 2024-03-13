"use client";

import { signIn, type ClientSafeProvider } from "next-auth/react";
import React from "react";

interface Props {
  provider: ClientSafeProvider;
}

const EmailSignIn = ({ provider }: Props) => {
  const { id, name, type, signinUrl, callbackUrl } = provider;
  return (
    <>
      <h1>Email Sign In</h1>
      <div>{`id: ${id}`}</div>
      <div>{`name: ${name}`}</div>
      <div>{`type: ${type}`}</div>
      <div>{`signinUrl: ${signinUrl}`}</div>
      <div>{`callbackUrl: ${callbackUrl}`}</div>
      <button
        onClick={() =>
          signIn(provider.id, { email: "miller.muradil@gmail.com" })
        }
      >
        Sign in with {provider.name}
      </button>
    </>
  );
};

export default EmailSignIn;
