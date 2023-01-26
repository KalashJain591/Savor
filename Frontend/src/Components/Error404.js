import React from 'react'

export default function Error404() {
  return (
    <div>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3 text-danger"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead text-danger">
                    The page you’re looking for doesn’t exist.
                  </p>
                  
                <a href="/" class="btn btn-primary m-2">Go Home</a>
            </div>
        </div>
    </div>
  )
}
