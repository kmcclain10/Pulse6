import React, { useState } from 'react';

const CreditApplication = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ssn: '',
    dob: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Employment Information
    employer: '',
    jobTitle: '',
    income: '',
    employmentLength: '',
    
    // Vehicle Information
    vehicleOfInterest: '',
    downPayment: '',
    tradeInVehicle: '',
    
    // Financial Information
    monthlyExpenses: '',
    otherIncome: '',
    creditScore: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const submitApplication = () => {
    alert('Credit application submitted successfully!');
    // Here you would normally send to backend
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => updateFormData('lastName', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Social Security Number"
                value={formData.ssn}
                onChange={(e) => updateFormData('ssn', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={(e) => updateFormData('dob', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Address Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Street Address"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => updateFormData('state', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Employment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Employer Name"
                value={formData.employer}
                onChange={(e) => updateFormData('employer', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={(e) => updateFormData('jobTitle', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="number"
                placeholder="Annual Income"
                value={formData.income}
                onChange={(e) => updateFormData('income', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <select
                value={formData.employmentLength}
                onChange={(e) => updateFormData('employmentLength', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Employment Length</option>
                <option value="less-than-1">Less than 1 year</option>
                <option value="1-2">1-2 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5-plus">5+ years</option>
              </select>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Vehicle & Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Vehicle of Interest"
                value={formData.vehicleOfInterest}
                onChange={(e) => updateFormData('vehicleOfInterest', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="number"
                placeholder="Down Payment"
                value={formData.downPayment}
                onChange={(e) => updateFormData('downPayment', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Trade-in Vehicle (Optional)"
                value={formData.tradeInVehicle}
                onChange={(e) => updateFormData('tradeInVehicle', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="number"
                placeholder="Monthly Expenses"
                value={formData.monthlyExpenses}
                onChange={(e) => updateFormData('monthlyExpenses', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Review & Submit</h3>
            <div className="bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-medium text-white mb-4">Application Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white ml-2">{formData.firstName} {formData.lastName}</span>
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white ml-2">{formData.email}</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <span className="text-white ml-2">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-gray-400">Annual Income:</span>
                  <span className="text-white ml-2">${formData.income}</span>
                </div>
                <div>
                  <span className="text-gray-400">Vehicle Interest:</span>
                  <span className="text-white ml-2">{formData.vehicleOfInterest}</span>
                </div>
                <div>
                  <span className="text-gray-400">Down Payment:</span>
                  <span className="text-white ml-2">${formData.downPayment}</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-gray-800 rounded-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Credit Application</h2>
          <div className="text-gray-400">
            Step {step} of 5
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {renderStep()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="bg-gray-600 hover:bg-gray-500 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Previous
          </button>
          
          {step < 5 ? (
            <button
              onClick={nextStep}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitApplication}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditApplication;