import BackButton from "@/components/BackButton";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function GetSecret() {
  const [hash, setHash] = useState<string>("");
  const [secretString, setSecretString] = useState<string>("");
  const getSecret = async () => {
    const request: SecretFetchRequest = {
      hash: hash,
    };
    const response = await fetch(`/api/v1/secret/${hash}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(!response.ok){
      alert("Invalid or expired code.")
    }
    const secret: Secret = await response.json();
    if(!secret.secret_text){
      alert("Your code doesn't have a secret")
    }
    setSecretString(secret.secret_text);
  };
  return secretString ? (
    <div>
      <div>
        <BackButton></BackButton>
      </div>
      <div className="h-screen flex justify-center items-center">
        <p className="text-4xl">Your secret is: {secretString}</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <BackButton></BackButton>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="hash">
          <h1>Type your code here</h1>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs mt-6"
          placeholder="Type here"
          name="hash"
          id="hash"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setHash(e.currentTarget.value)
          }
          value={hash}
          required
        />
        <button className="btn btn-primary" onClick={() => getSecret()}>
          Submit
        </button>
      </div>
    </div>
  );
}
