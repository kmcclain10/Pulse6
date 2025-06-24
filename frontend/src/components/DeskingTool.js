import React, { useState } from 'react';

const DeskingTool = () => {
  const [calculation, setCalculation] = useState({
    vehiclePrice: '',
    downPayment: '',
    interestRate: '',
    termMonths: '',
    result: null
  });

  const calculatePayment = () => {
    const { vehiclePrice, downPayment, interestRate, termMonths } = calculation;
    
    if (!vehiclePrice || !downPayment || !interestRate || !termMonths) {
      alert('Please fill in all fields');
      return;
    }

    const principal = parseFloat(vehiclePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(termMonths);

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalCost = monthlyPayment * numberOfPayments + parseFloat(downPayment);
    const totalInterest = totalCost - parseFloat(vehiclePrice);

    setCalculation(prev => ({
      ...prev,
      result: {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalCost: totalCost.toFixed(2),
        totalInterest: totalInterest.toFixed(2)
      }
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <div className="bg-gray-800 rounded-2xl p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Finance Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-white font-medium mb-2 text-sm md:text-base">Vehicle Price</label>
              <input
                type="number"
                value={calculation.vehiclePrice}
                onChange={(e) => setCalculation(prev => ({ ...prev, vehiclePrice: e.target.value }))}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                placeholder="$25,000"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2 text-sm md:text-base">Down Payment</label>
              <input
                type="number"
                value={calculation.downPayment}
                onChange={(e) => setCalculation(prev => ({ ...prev, downPayment: e.target.value }))}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                placeholder="$5,000"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2 text-sm md:text-base">Interest Rate (%)</label>
              <input
                type="number"
                step="0.01"
                value={calculation.interestRate}
                onChange={(e) => setCalculation(prev => ({ ...prev, interestRate: e.target.value }))}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
                placeholder="4.5"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2 text-sm md:text-base">Term (Months)</label>
              <select
                value={calculation.termMonths}
                onChange={(e) => setCalculation(prev => ({ ...prev, termMonths: e.target.value }))}
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 text-sm md:text-base"
              >
                <option value="">Select Term</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
                <option value="48">48 months</option>
                <option value="60">60 months</option>
                <option value="72">72 months</option>
              </select>
            </div>
            
            <button
              onClick={calculatePayment}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
            >
              Calculate Payment
            </button>
          </div>
          
          {calculation.result && (
            <div className="bg-gray-700 rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Payment Breakdown</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm md:text-base">Monthly Payment:</span>
                  <span className="text-yellow-400 font-bold text-lg md:text-xl">${calculation.result.monthlyPayment}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm md:text-base">Total Cost:</span>
                  <span className="text-white font-medium text-sm md:text-base">${calculation.result.totalCost}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm md:text-base">Total Interest:</span>
                  <span className="text-white font-medium text-sm md:text-base">${calculation.result.totalInterest}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeskingTool;