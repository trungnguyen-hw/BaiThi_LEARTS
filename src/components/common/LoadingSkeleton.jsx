import React from 'react';

export const LoadingSkeleton = ({ type = 'grid', count = 4 }) => {
  if (type === 'product-detail') {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="skeleton-box" style={{ height: '400px', width: '100%', borderRadius: '4px', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite' }}></div>
          </div>
          <div className="col-md-6">
            <div className="skeleton-box mb-3" style={{ height: '32px', width: '80%', borderRadius: '4px', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite' }}></div>
            <div className="skeleton-box mb-3" style={{ height: '24px', width: '40%', borderRadius: '4px', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite' }}></div>
            <div className="skeleton-box mb-4" style={{ height: '80px', width: '100%', borderRadius: '4px', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite' }}></div>
            <div className="skeleton-box mb-3" style={{ height: '45px', width: '50%', borderRadius: '4px', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite' }}></div>
          </div>
        </div>
        <style>{`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="row">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className={type === 'category' ? 'col-lg-3 col-sm-6 mb-4' : 'col-lg-3 col-md-4 col-sm-6 mb-4'}>
          <div className="card border-0 h-100">
            <div className="skeleton-img" style={{ height: type === 'category' ? '180px' : '280px', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite', borderRadius: '4px' }}></div>
            <div className="card-body px-0 pt-3">
              <div className="skeleton-title mb-2" style={{ height: '16px', width: '70%', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite', borderRadius: '2px' }}></div>
              <div className="skeleton-price" style={{ height: '14px', width: '40%', backgroundColor: '#e9ecef', animation: 'pulse 1.5s infinite', borderRadius: '2px' }}></div>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSkeleton;
