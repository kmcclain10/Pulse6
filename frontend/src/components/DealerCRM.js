import React, { useState } from 'react';

const DealerCRM = () => {
  const [dealers] = useState([
    {
      id: 1,
      name: 'Premier Motors',
      contact: 'John Smith',
      email: 'john@premiermotors.com',
      phone: '(555) 123-4567',
      location: 'Nashville, TN',
      subscription: 'Professional',
      status: 'active',
      vehicles: 12,
      revenue: 299,
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Apex Auto',
      contact: 'Sarah Johnson',
      email: 'sarah@apexauto.com',
      phone: '(555) 987-6543',
      location: 'Atlanta, GA',
      subscription: 'Enterprise',
      status: 'active',
      vehicles: 25,
      revenue: 399,
      joinDate: '2024-02-20'
    },
    {
      id: 3,
      name: 'Elite Auto Group',
      contact: 'Mike Wilson',
      email: 'mike@eliteauto.com',
      phone: '(555) 456-7890',
      location: 'Memphis, TN',
      subscription: 'Starter',
      status: 'trial',
      vehicles: 8,
      revenue: 99,
      joinDate: '2024-06-01'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'trial': return 'bg-yellow-500';
      case 'inactive': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getSubscriptionColor = (subscription) => {
    switch (subscription) {
      case 'Starter': return 'text-blue-400';
      case 'Professional': return 'text-yellow-400';
      case 'Enterprise': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-6">
      <div className="bg-gray-800 rounded-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Dealer CRM</h2>
            <p className="text-gray-400 mt-2">Manage dealer relationships and subscriptions</p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg">
            Add New Dealer
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Total Dealers</h3>
            <p className="text-2xl font-bold text-white mt-2">{dealers.length}</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Active Subscriptions</h3>
            <p className="text-2xl font-bold text-green-400 mt-2">
              {dealers.filter(d => d.status === 'active').length}
            </p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Monthly Revenue</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-2">
              ${dealers.reduce((sum, d) => sum + d.revenue, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Total Vehicles</h3>
            <p className="text-2xl font-bold text-blue-400 mt-2">
              {dealers.reduce((sum, d) => sum + d.vehicles, 0)}
            </p>
          </div>
        </div>

        {/* Dealers Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-4 text-gray-300 font-medium">Dealer</th>
                <th className="pb-4 text-gray-300 font-medium">Contact</th>
                <th className="pb-4 text-gray-300 font-medium">Location</th>
                <th className="pb-4 text-gray-300 font-medium">Subscription</th>
                <th className="pb-4 text-gray-300 font-medium">Vehicles</th>
                <th className="pb-4 text-gray-300 font-medium">Revenue</th>
                <th className="pb-4 text-gray-300 font-medium">Status</th>
                <th className="pb-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dealers.map((dealer) => (
                <tr key={dealer.id} className="border-b border-gray-700">
                  <td className="py-4">
                    <div>
                      <div className="text-white font-medium">{dealer.name}</div>
                      <div className="text-gray-400 text-sm">Joined {dealer.joinDate}</div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <div className="text-white">{dealer.contact}</div>
                      <div className="text-gray-400 text-sm">{dealer.email}</div>
                      <div className="text-gray-400 text-sm">{dealer.phone}</div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{dealer.location}</td>
                  <td className="py-4">
                    <span className={`${getSubscriptionColor(dealer.subscription)} font-medium`}>
                      {dealer.subscription}
                    </span>
                  </td>
                  <td className="py-4 text-gray-300">{dealer.vehicles}</td>
                  <td className="py-4 text-gray-300">${dealer.revenue}/month</td>
                  <td className="py-4">
                    <span className={`${getStatusColor(dealer.status)} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}>
                      {dealer.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="text-yellow-400 hover:text-yellow-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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

        {/* Performance Metrics */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Top Performing Dealers</h3>
            <div className="space-y-3">
              {dealers.sort((a, b) => b.vehicles - a.vehicles).slice(0, 3).map((dealer, index) => (
                <div key={dealer.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-400' : 'bg-orange-400'} flex items-center justify-center text-xs font-bold text-gray-900`}>
                      {index + 1}
                    </div>
                    <span className="text-white font-medium">{dealer.name}</span>
                  </div>
                  <span className="text-gray-400">{dealer.vehicles} vehicles</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Subscription Distribution</h3>
            <div className="space-y-3">
              {['Starter', 'Professional', 'Enterprise'].map(plan => {
                const count = dealers.filter(d => d.subscription === plan).length;
                return (
                  <div key={plan} className="flex items-center justify-between">
                    <span className={`${getSubscriptionColor(plan)} font-medium`}>{plan}</span>
                    <span className="text-gray-400">{count} dealers</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerCRM;