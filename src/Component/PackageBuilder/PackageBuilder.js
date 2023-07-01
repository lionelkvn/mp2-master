import React, { useState } from 'react';
import "./PackageBuilder.css"

const PackageBuilderForm = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const handleNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

 
    console.log({
      selectedPackage,
      additionalNotes
    });
  };

  const renderPackageContents = () => {
    if (selectedPackage === 'basic') {
      return (
        <div>
          <h3>Basic Package Contents:</h3>
          <ul>
            <li>1 Logo Concept</li>
            <li>Any Format Files Ai/EPS/PDF/SVG/JPG/PNG</li>
            <li>1 Revision</li>
            <li>3 Days of Delivery</li>
          </ul>
        </div>
      );
    }

    if (selectedPackage === 'standard') {
      return (
        <div>
          <h3>Standard Package Contents:</h3>
          <ul>
            <li>2 Concepts</li>
            <li>Any Format Files Ai/EPS/PDF/SVG/JPG/PNG </li>
            <li>2 Revisions</li>
            <li>3 Days of Delivery</li>
          </ul>
        </div>
      );
    }

    if (selectedPackage === 'premium') {
      return (
        <div>
          <h3>Premium Package Contents:</h3>
          <ul>
            <li>2 Concepts</li>
            <li>Any Format Files Ai/EPS/PDF/SVG/JPG/PNG </li>
            <li>Unlimited Revisions</li>
            <li>3 Days of Delivery</li>
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <div className='package-builder-container'>
    <form className='package-builder' onSubmit={handleSubmit}>
      <h2> Logo Package Builder</h2>
      <div>
        <label htmlFor="package">Select a package:</label>
        <select id="package" value={selectedPackage} onChange={handlePackageChange} required>
          <option value="">-- Select Package --</option>
          <option value="basic">Basic Package</option>
          <option value="standard">Standard Package</option>
          <option value="premium">Premium Package</option>
        </select>
      </div>
      <div>
        {renderPackageContents()}
      </div>
      <div>
        <label htmlFor="notes">Additional Notes: (Please Indicate Brand Name)</label>
        </div>
        <div>
        <textarea id="notes" value={additionalNotes} onChange={handleNotesChange} />
      </div>
      <button type="submit">Proceed to Checkout</button>
    </form>
    </div>
  );
};

export default PackageBuilderForm;
