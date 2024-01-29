import React, {useState} from 'react'

interface Props {
    handleChange: (e: Date) => void; 
}
function ExpiryDateInput({handleChange}: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" data-testid="dateLabel">
        <span className="label-text text-xl">When should it expire naturally?</span>
      </label>
      <input
        data-testid="datetime-input"
        type="datetime-local"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e)=>{handleChange(new Date(e.target.value))}}
        min={1}
        required
      />
    </div>
  )
}

export default ExpiryDateInput