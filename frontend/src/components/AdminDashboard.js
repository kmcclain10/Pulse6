import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalVehicles: 0,
    totalDealers: 0,
    totalCustomers: 0,
    totalDeals: 0,
    recentVehicles: 0,
    scrapingJobsPending: 0,
    scrapingJobsRunning: 0
  });

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showVehicles, setShowVehicles] = useState(false);

  useEffect(() => {
    fetchStats();
    fetchVehicles();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`${API}/admin/stats`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Set demo data if API fails
      setStats({
        totalVehicles: 35,
        totalDealers: 8,
        totalCustomers: 127,
        totalDeals: 23,
        recentVehicles: 12,
        scrapingJobsPending: 2,
        scrapingJobsRunning: 1
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchVehicles = async () => {
    try {
      const response = await axios.get(`${API}/customer/vehicles?limit=10`);
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const StatCard = ({ title, value, icon, color = "yellow" }) => (
    <div className="bg-gray-800 rounded-2xl p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-xs md:text-sm font-medium">{title}</p>
          <p className={`text-${color}-400 text-xl md:text-3xl font-bold mt-1 md:mt-2`}>
            {loading ? '...' : value.toLocaleString()}
          </p>
        </div>
        <div className={`bg-${color}-400 bg-opacity-20 p-2 md:p-3 rounded-xl`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400 text-sm md:text-base">PULSE Auto Market - Master Control Panel</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <StatCard
          title="Total Vehicles"
          value={stats.totalVehicles}
          color="yellow"
          icon={
            <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-1.26-3.78A2 2 0 0 0 15.84 4H8.16a2 2 0 0 0-1.9 1.22L5 9H3v11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h-2zM7.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
          }
        />
        
        <StatCard
          title="Active Dealers"
          value={stats.totalDealers}
          color="blue"
          icon={
            <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          }
        />
        
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers}
          color="green"
          icon={
            <svg className="w-6 h-6 md:w-8 md:h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 4v4l-4-4-4 4V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2zm4 4v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6h1c1.1 0 2 .9 2 2z"/>
            </svg>
          }
        />
        
        <StatCard
          title="Active Deals"
          value={stats.totalDeals}
          color="purple"
          icon={
            <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
            </svg>
          }
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
        <div className="bg-gray-800 rounded-2xl p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">System Overview</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm md:text-base">Recent Vehicles (7 days)</span>
              <span className="text-white font-medium">{stats.recentVehicles}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm md:text-base">Pending Scraping Jobs</span>
              <span className="text-yellow-400 font-medium">{stats.scrapingJobsPending}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm md:text-base">Running Scraping Jobs</span>
              <span className="text-green-400 font-medium">{stats.scrapingJobsRunning}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm md:text-base">System Status</span>
              <span className="text-green-400 font-medium">✓ Healthy</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 md:py-3 px-2 md:px-4 rounded-lg transition-colors text-xs md:text-sm">
              Start Scraper
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-2 md:px-4 rounded-lg transition-colors text-xs md:text-sm">
              Add Dealer
            </button>
            <button
              onClick={() => setShowVehicles(!showVehicles)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 px-2 md:px-4 rounded-lg transition-colors text-xs md:text-sm"
            >
              {showVehicles ? 'Hide' : 'View'} Vehicles
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 md:py-3 px-2 md:px-4 rounded-lg transition-colors text-xs md:text-sm">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Inventory */}
      {showVehicles && (
        <div className="bg-gray-800 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">Recent Vehicles ({vehicles.length})</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{vehicle.dealer_name}</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                    {vehicle.images?.length || 0} photos
                  </span>
                </div>
                <h4 className="text-white font-bold text-sm md:text-base">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h4>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-yellow-400 font-bold text-lg">
                    ${vehicle.price?.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {vehicle.mileage?.toLocaleString()} mi
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {vehicle.dealer_city}, {vehicle.dealer_state}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-2xl p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-400">2 minutes ago</span>
            <span className="text-white">New vehicle added by Motor Max</span>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-400">15 minutes ago</span>
            <span className="text-white">Scraping job completed - 35 vehicles found</span>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-400">1 hour ago</span>
            <span className="text-white">New dealer subscription: Motor Max</span>
          </div>
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
            <span className="text-gray-400">3 hours ago</span>
            <span className="text-white">Customer inquiry for 2018 Ford E-450</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;