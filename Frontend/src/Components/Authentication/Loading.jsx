import React from 'react'
import './loading.css'
export default function Loading() {
  return (
    <div className='spinner container'>
        <div class="spinner-grow mx-4" width="3rem" height="3rem" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow mx-4" width="3rem" height="3rem" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow mx-4" width="3rem" height="3rem" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow mx-4" width="3rem" height="3rem" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
  )
}
