import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] sand">
      <div className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">Dashboard</h2>
        <span className="text-amber-400 text-6xl mb-2">🚧</span>
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Under Construction
        </h3>
        <p className="text-base text-secondary/80">
          We're working hard to bring you new features. Please check back soon!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
