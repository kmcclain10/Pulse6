import React, { useState } from 'react';

const LeadsManagement = () => {
  const [leads] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@email.com',
      phone: '(555) 123-4567',
      interest: '2021 Honda Accord',
      status: 'hot',
      lastContact: '2 hours ago',
      source: 'Website'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '(555) 987-6543',
      interest: '2020 Ford F-150',
      status: 'warm',
      lastContact: '1 day ago',
      source: 'Referral'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike@email.com',
      phone: '(555) 456-7890',
      interest: '2019 Toyota Camry',
      status: 'cold',
      lastContact: '3 days ago',
      source: 'AutoTrader'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'hot': return 'bg-red-500';
      case 'warm': return 'bg-yellow-500';
      case 'cold': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6">
      <div className="bg-gray-800 rounded-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Leads Management</h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg">
            Add New Lead
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-4 text-gray-300 font-medium">Customer</th>
                <th className="pb-4 text-gray-300 font-medium">Contact</th>
                <th className="pb-4 text-gray-300 font-medium">Interest</th>
                <th className="pb-4 text-gray-300 font-medium">Status</th>
                <th className="pb-4 text-gray-300 font-medium">Last Contact</th>
                <th className="pb-4 text-gray-300 font-medium">Source</th>
                <th className="pb-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-700">
                  <td className="py-4">
                    <div>
                      <div className="text-white font-medium">{lead.name}</div>
                      <div className="text-gray-400 text-sm">{lead.email}</div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{lead.phone}</td>
                  <td className="py-4 text-gray-300">{lead.interest}</td>
                  <td className="py-4">
                    <span className={`${getStatusColor(lead.status)} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-300">{lead.lastContact}</td>
                  <td className="py-4 text-gray-300">{lead.source}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="text-yellow-400 hover:text-yellow-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                      </button>
                      <button className="text-green-400 hover:text-green-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadsManagement;