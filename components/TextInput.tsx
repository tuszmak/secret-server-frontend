import React from "react";

interface Props {
    handleChange: (e: string) => void; 
}

function TextInput({handleChange} : Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-xl">What is your secret?</span>
      </label>
      <input
        type="text"
        placeholder="Type your secret here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e)=>handleChange(e.target.value)}
        required
      />
    </div>
  );
}

export default TextInput;
