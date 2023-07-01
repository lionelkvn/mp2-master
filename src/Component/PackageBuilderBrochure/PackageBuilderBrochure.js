import React, { useState } from 'react';
import "../PackageBuilder/PackageBuilder.css"

const PackageBuilderBrochure = () => {
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
            <li>1 Trifold Brochure Design 6-panels</li>
            <li>2 Revisions</li>
            <li>Photo Editing</li>
            <li>High Res Print File</li>
          </ul>
        </div>
      );
    }

    if (selectedPackage === 'standard') {
      return (
        <div>
          <h3>Standard Package Contents:</h3>
          <ul>
            <li>1 Trifold Brochure Design</li>
            <li>4 Revisions</li>
            <li>Photo Editing</li>
            <li>High Res Print File</li>
          </ul>
        </div>
      );
    }

    if (selectedPackage === 'premium') {
      return (
        <div>
          <h3>Premium Package Contents:</h3>
          <ul>
            <li>1 Trifold Brochure Design</li>
            <li>Unlimited Revisions </li>
            <li>Photo Editing</li>
            <li>Vector File</li>
            <li>Source File</li>
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <div className='package-builder-container'>
    <form className='package-builder' onSubmit={handleSubmit}>
      <h2> Brochure Package Builder</h2>
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

export default PackageBuilderBrochure;
