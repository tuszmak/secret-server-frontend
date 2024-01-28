import React from 'react'
interface Props {
    handleChange: (e: number) => void; 
}
function NumberInput({handleChange} : any) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" data-testid="number-label">
        <span className="label-text text-xl">How many visits do you allow?</span>
      </label>
      <input
      data-testid="number-input"
        type="number"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e)=>handleChange(e.target.value)}
        min={1}
        required
      />
    </div>
  )
}

export default NumberInput