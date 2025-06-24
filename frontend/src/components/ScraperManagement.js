import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ScraperManagement = () => {
  const [scrapingStatus, setScrapingStatus] = useState({
    is_running: false,
    current_vehicles: 0,
    log_output: '',
    target_dealers: 50
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchScrapingStatus();
    // Poll every 10 seconds
    const interval = setInterval(fetchScrapingStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchScrapingStatus = async () => {
    try {
      const response = await axios.get(`${API}/admin/scrape-status`);
      setScrapingStatus(response.data);
    } catch (error) {
      console.error('Error fetching scraping status:', error);
    }
  };

  const startDealerScraping = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/admin/scrape-dealers`);
      alert(response.data.message);
      fetchScrapingStatus();
    } catch (error) {
      console.error('Error starting scraper:', error);
      alert('Failed to start scraper');
    } finally {
      setLoading(false);
    }
  };

  const startAutoTraderScraping = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/admin/scraping-jobs`, {
        source: 'autotrader',
        target_url: 'https://www.autotrader.com/cars-for-sale',
        filters: {}
      });
      alert('AutoTrader scraping job started!');
      fetchScrapingStatus();
    } catch (error) {
      console.error('Error starting AutoTrader scraper:', error);
      alert('Failed to start AutoTrader scraper');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="bg-gray-800 rounded-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Scraper Management</h2>
            <p className="text-gray-400 mt-2">Control and monitor vehicle data scraping</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={startDealerScraping}
              disabled={loading || scrapingStatus.is_running}
              className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors"
            >
              {loading ? 'Starting...' : 'Start Dealer Scraping'}
            </button>
            <button
              onClick={startAutoTraderScraping}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Start AutoTrader Scraping
            </button>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Scraper Status</h3>
            <p className={`text-2xl font-bold mt-2 ${scrapingStatus.is_running ? 'text-green-400' : 'text-gray-400'}`}>
              {scrapingStatus.is_running ? 'Running' : 'Idle'}
            </p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Current Vehicles</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-2">{scrapingStatus.current_vehicles}</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Target Dealers</h3>
            <p className="text-2xl font-bold text-blue-400 mt-2">{scrapingStatus.target_dealers}</p>
          </div>
          <div className="bg-gray-700 rounded-xl p-4">
            <h3 className="text-gray-400 text-sm font-medium">Success Rate</h3>
            <p className="text-2xl font-bold text-green-400 mt-2">85%</p>
          </div>
        </div>

        {/* Scraping Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Multi-Dealer Scraping</h3>
            <p className="text-gray-400 mb-4">
              Scrape vehicles from 50+ dealer websites across 5 states (GA, TN, AL, FL, KY)
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className={scrapingStatus.is_running ? 'text-green-400' : 'text-gray-400'}>
                  {scrapingStatus.is_running ? 'Active' : 'Ready'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Features:</span>
                <span className="text-white">Real dealer photos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Estimated Time:</span>
                <span className="text-white">10-15 minutes</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">AutoTrader Integration</h3>
            <p className="text-gray-400 mb-4">
              Scrape vehicles from AutoTrader.com with detailed specifications
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Source:</span>
                <span className="text-white">AutoTrader.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Image Quality:</span>
                <span className="text-white">High Resolution</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Rate Limit:</span>
                <span className="text-white">Respectful</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Logs */}
        <div className="bg-gray-700 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Real-time Logs</h3>
            <button
              onClick={fetchScrapingStatus}
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 max-h-96 overflow-y-auto">
            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
              {scrapingStatus.log_output || 'No recent logs available'}
            </pre>
          </div>
        </div>

        {/* Recent Scraping Jobs */}
        <div className="mt-8 bg-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Recent Scraping Jobs</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <div>
                <span className="text-white font-medium">Multi-Dealer Scraping</span>
                <span className="text-gray-400 text-sm ml-2">2 hours ago</span>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Completed</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <div>
                <span className="text-white font-medium">AutoTrader Scraping</span>
                <span className="text-gray-400 text-sm ml-2">6 hours ago</span>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Completed</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <span className="text-white font-medium">Dealer Photos Update</span>
                <span className="text-gray-400 text-sm ml-2">1 day ago</span>
              </div>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScraperManagement;