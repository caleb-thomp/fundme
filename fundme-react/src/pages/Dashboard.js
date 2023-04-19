import React from "react";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-5">
          <div className="card">
            <div className="card-header text-center">
              Dashboard
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Welcome, John Doe!
              </h5>
              <p className="card-text">
                Here are your saved wallet addresses:
              </p>
              <ul className="list-group mb-3">
                <li className="list-group-item">
                  0x1234567890abcdef
                </li>
                <li className="list-group-item">
                  0xabcdef1234567890
                </li>
                <li className="list-group-item">
                  0x4567890abcdef123
                </li>
              </ul>
              <p className="card-text">
                Here are your saved bank accounts:
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  Bank of America - ****1234
                </li>
                <li className="list-group-item">
                  Chase Bank - ****5678
                </li>
                <li className="list-group-item">
                  Wells Fargo - ****9012
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
