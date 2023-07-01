import React, { useState } from 'react';
import './PackagePriceBrochure.css';

const PackagePriceBrochure = () => {
  const [selectedPackage, setSelectedPackage] = useState('basic');

  const handlePackageClick = (packageType) => {
    setSelectedPackage(packageType);
  };

  return (
    <div className="package-price container">
      <div className='package-option-wrapper'>
        <span
          className={`package-option ${selectedPackage === 'basic' ? 'selected' : ''}`}
          onClick={() => handlePackageClick('basic')}
        >
          Basic
        </span>
        <span
          className={`package-option ${selectedPackage === 'standard' ? 'selected' : ''}`}
          onClick={() => handlePackageClick('standard')}
        >
          Standard
        </span>
        <span
          className={`package-option ${selectedPackage === 'premium' ? 'selected' : ''}`}
          onClick={() => handlePackageClick('premium')}
        >
          Premium
        </span>
      </div>

      {selectedPackage === 'basic' && (
        <div className="package-text">
          <div className='packageDesc'><h3>1 Trifold Brochure Design | 2 Revisions | Photo Editing | High Res Print File</h3></div>
          <p>6 panels/pages</p>
          <p>Photo editing</p>
          <p>Files ready for print</p>
          <p>Include source file</p>
        </div>
      )}

      {selectedPackage === 'standard' && (
        <div className="package-text">
          <div className='packageDesc'><h3>1 Trifold Brochure Design | 4 Revisions | Photo Editing | High Res Print File | Source File</h3></div>
          <p>6 panels/pages</p>
          <p>Photo editing</p>
          <p>Files ready for print</p>
          <p>Include source file</p>
        </div>
      )}

      {selectedPackage === 'premium' && (
        <div className="package-text">
          <div className='packageDesc' ><h3>1 Trifold Brochure Design | Unlimited Revisions | Photo Editing | High Res Print File | Source File</h3></div>
          <p>1 concept included</p>
          <p>Logo transparency</p>
          <p>Vector file</p>
          <p>Printable file</p>
          <p>Include source file</p> 
        </div>
      )}
      <div className="continue-button">
        <span> <a href='/purchasebrochure'> Continue</a></span>
      </div>
    </div>
  );
}

export default PackagePriceBrochure;
