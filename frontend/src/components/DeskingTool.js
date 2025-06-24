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
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-8">Finance Calculator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Vehicle Price</label>
              <input
                type="number"
                value={calculation.vehiclePrice}
                onChange={(e) => setCalculation(prev => ({ ...prev, vehiclePrice: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="$25,000"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Down Payment</label>
              <input
                type="number"
                value={calculation.downPayment}
                onChange={(e) => setCalculation(prev => ({ ...prev, downPayment: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="$5,000"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.01"
                value={calculation.interestRate}
                onChange={(e) => setCalculation(prev => ({ ...prev, interestRate: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
                placeholder="4.5"
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Term (Months)</label>
              <select
                value={calculation.termMonths}
                onChange={(e) => setCalculation(prev => ({ ...prev, termMonths: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-400"
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
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Calculate Payment
            </button>
          </div>
          
          {calculation.result && (
            <div className="bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Payment Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly Payment:</span>
                  <span className="text-yellow-400 font-bold text-xl">${calculation.result.monthlyPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Cost:</span>
                  <span className="text-white font-medium">${calculation.result.totalCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Interest:</span>
                  <span className="text-white font-medium">${calculation.result.totalInterest}</span>
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