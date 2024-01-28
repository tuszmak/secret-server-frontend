import React from 'react'

interface cardProps{
    link: string
}

function SecretCard({link} : cardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">The code to your secret is:</h2>
      <p>{link}</p>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary"
          onClick={() => navigator.clipboard.writeText(link)}
        >
          Copy code
        </button>
      </div>
    </div>
  </div>
  )
}

export default SecretCard