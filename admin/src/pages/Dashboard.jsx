import React from 'react';
import { DollarSign, ShoppingCart, Package, Users, ArrowUp, ArrowDown, Calendar } from 'lucide-react';

const DashboardHome = () => {
  // Sample data for metrics
  const metrics = [
    { title: "Total Revenue", value: "$48,294", icon: <DollarSign className="h-6 w-6 text-blue-500" />, change: "+12.5%", isPositive: true },
    { title: "Total Orders", value: "1,284", icon: <ShoppingCart className="h-6 w-6 text-green-500" />, change: "+8.3%", isPositive: true },
    { title: "Products", value: "384", icon: <Package className="h-6 w-6 text-purple-500" />, change: "+4.2%", isPositive: true },
    { title: "New Customers", value: "429", icon: <Users className="h-6 w-6 text-orange-500" />, change: "-2.1%", isPositive: false },
  ];

  // Sample data for monthly sales
  const monthlySalesData = [
    { month: 'Jan', sales: 12400 },
    { month: 'Feb', sales: 15200 },
    { month: 'Mar', sales: 18450 },
    { month: 'Apr', sales: 16800 },
    { month: 'May', sales: 22100 },
    { month: 'Jun', sales: 19300 },
  ];

  // Sample data for recent orders
  const recentOrders = [
    { id: '#ORD-2389', customer: 'Emma Thompson', date: 'Mar 15, 2025', amount: '$129.99', status: 'Completed' },
    { id: '#ORD-2388', customer: 'Michael Chen', date: 'Mar 14, 2025', amount: '$87.50', status: 'Processing' },
    { id: '#ORD-2387', customer: 'Sarah Johnson', date: 'Mar 14, 2025', amount: '$243.75', status: 'Pending' },
    { id: '#ORD-2386', customer: 'David Miller', date: 'Mar 13, 2025', amount: '$56.20', status: 'Completed' },
  ];

  // Sample data for top selling products
  const topProducts = [
    { name: 'Wireless Headphones', sold: 487, revenue: '$24,350' },
    { name: 'Smart Watch Pro', sold: 356, revenue: '$49,840' },
    { name: 'Laptop Sleeve Case', sold: 289, revenue: '$5,780' },
    { name: 'Bluetooth Speaker', sold: 243, revenue: '$7,290' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-gray-100 p-2 rounded-lg">{metric.icon}</div>
              <div className={`flex items-center ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <h3 className="text-gray-500 text-sm">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Monthly Sales</h2>
            <div className="flex items-center space-x-2">
              <select className="text-sm bg-gray-100 border-none rounded p-2">
                <option>Last 6 Months</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-4">
            {monthlySalesData.map((item, index) => {
              const heightPercentage = (item.sales / 25000) * 100;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-blue-100 rounded relative" style={{ height: `${heightPercentage}%` }}>
                    <div className="absolute bottom-0 w-full bg-blue-500 rounded" style={{ height: `${heightPercentage}%` }}></div>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">{item.month}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Calendar / Upcoming */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-bold text-gray-800">Upcoming</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-3 py-2">
              <p className="text-sm font-medium text-gray-800">Inventory Restock</p>
              <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
            </div>
            <div className="border-l-4 border-green-500 pl-3 py-2">
              <p className="text-sm font-medium text-gray-800">Spring Sale Launch</p>
              <p className="text-xs text-gray-500">Mar 20, 2025</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-3 py-2">
              <p className="text-sm font-medium text-gray-800">Supplier Meeting</p>
              <p className="text-xs text-gray-500">Mar 22, 2025, 2:00 PM</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-3 py-2">
              <p className="text-sm font-medium text-gray-800">Product Photography</p>
              <p className="text-xs text-gray-500">Mar 25, 2025, 9:00 AM</p>
            </div>
          </div>
          <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
            View Full Calendar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="py-3 px-6 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                    <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-800">{order.customer}</td>
                    <td className="py-3 px-6 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="py-3 px-6 whitespace-nowrap text-sm font-medium text-gray-800">{order.amount}</td>
                    <td className="py-3 px-6 whitespace-nowrap text-sm">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                        ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="text-sm text-blue-600 font-medium hover:text-blue-800">View All Orders</button>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">Top Selling Products</h2>
          </div>
          <div className="p-6">
            {topProducts.map((product, index) => (
              <div key={index} className={`flex justify-between items-center py-3 ${index !== topProducts.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div>
                  <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.sold} units sold</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="text-sm text-blue-600 font-medium hover:text-blue-800">View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;