import BackButton from "@/components/BackButton";
import ExpiryDateInput from "@/components/ExpiryDateInput";
import NumberInput from "@/components/NumberInput";
import SecretCard from "@/components/SecretCard";
import TextInput from "@/components/TextInput";
import dataChecker from "@/utils/dataChecker";
import React, { useState } from "react";


function Save() {
  const [secret, setSecret] = useState("");
  const [numberOfVisits, setNumberOfVisits] = useState(0);
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [link, setLink] = useState("");
  const handleSubmit = async () => {

    const isoDate = expiryDate.toISOString()
    const data: SecretCreationData = {
      secret,
      numberOfVisits,
      expiryDate: isoDate,
    };
    let checkValue = dataChecker(data)
    if(checkValue !== "Cool!"){
      alert(checkValue)
      return
    }
    const response = await fetch("/api/v1/secret", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseLink = await response.text();
      setLink(responseLink);
    }
  };

  return link ? (
    <div>
      <div>
        <BackButton></BackButton>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <SecretCard link={link} data-testid="secretCard" />
      </div>
    </div>
  ) : (
    <div>
      <div>
        <BackButton></BackButton>
      </div>
      <div className="flex flex-col items-center gap-3">
        <TextInput handleChange={(e: string) => setSecret(e)} />
        <NumberInput handleChange={(e: number) => setNumberOfVisits(e)} />
        <ExpiryDateInput handleChange={(d: Date) => setExpiryDate(d)} />
        <button
          className="btn btn-primary mt-8"
          onClick={handleSubmit}
          data-testid="submitButton"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Save;
