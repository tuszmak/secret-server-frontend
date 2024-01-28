import Link from 'next/link'
import React from 'react'

function BackButton() {
  return (
    <Link href="/"><button className='btn btn-primary'>Back</button></Link>
  )
}

export default BackButton