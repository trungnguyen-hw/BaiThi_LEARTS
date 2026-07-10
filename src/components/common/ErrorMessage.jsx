import React from 'react';

export const ErrorMessage = ({ message = 'Something went wrong. Please try again later.', onRetry }) => {
  return (
    <div className="text-center py-5 my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
            <h4 className="mb-2">Oops! Error Occurred</h4>
            <p className="text-muted mb-4">{message}</p>
            {onRetry && (
              <button 
                type="button" 
                className="btn btn-dark btn-hover-primary" 
                onClick={onRetry}
                style={{ padding: '10px 30px' }}
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
