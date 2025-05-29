import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import PageHeader from "../../components/PageHeader";

const Bookings = () => {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/admin/bookings/${id}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          marginLeft: "260px",
          padding: "2rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <PageHeader title="Booking Management" />

        <div
          style={{
            background: "#FFFFFF",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <input
              type="text"
              placeholder="Search by booking ID or user"
              style={inputStyle}
            />
            <select style={inputStyle}>
              <option value="">Filter by Airport</option>
              <option value="LHE">LHE</option>
              <option value="ISB">ISB</option>
            </select>
            <select style={inputStyle}>
              <option value="">Filter by Payment Type</option>
              <option value="online">Online</option>
              <option value="onsite">On-site</option>
            </select>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#F8FAFC" }}>
                <th style={{ ...thStyle, whiteSpace: "nowrap" }}>Booking ID</th>
                <th style={thStyle}>User</th>
                <th style={{ ...thStyle, whiteSpace: "nowrap" }}>Parking Lot</th>
                <th style={thStyle}>Vendor</th>
                <th style={thStyle}>Dates</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr key={booking.id}>
                  <td style={tdStyle}>{booking.id}</td>
                  <td style={tdStyle}>{booking.user}</td>
                  <td style={tdStyle}>{booking.lot}</td>
                  <td style={tdStyle}>{booking.vendor}</td>
                  <td style={tdStyle}>{booking.dates}</td>
                  <td style={tdStyle}>{booking.amount}</td>
                  <td style={tdStyle}>{booking.status}</td>
                  <td style={{ ...tdStyle }}>
                    <div style={{ display: "flex", flexWrap: "nowrap", gap: "6px" }}>
                      <button style={buttonStyle("#4B5563")} onClick={() => handleViewClick(booking.id)}>View</button>
                      <button style={buttonStyle("#DC2626")}>Cancel</button>
                      <button style={buttonStyle("#0EA5E9")}>Reschedule</button>
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

const bookingData = [
  {
    id: "B1023",
    user: "Ali Khan",
    lot: "Airport Lot A",
    vendor: "Ali Vendor",
    dates: "22–24 May",
    amount: "PKR 1,200",
    status: "Confirmed"
  },
  {
    id: "B1022",
    user: "Sarah Ahmed",
    lot: "Lot B - DHA",
    vendor: "Sarah Vendor",
    dates: "20–22 May",
    amount: "PKR 950",
    status: "Pending"
  }
];

const thStyle = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "1px solid #E2E8F0",
  fontWeight: "600"
};

const tdStyle = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "1px solid #E2E8F0",
  verticalAlign: "middle"
};

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  minWidth: "200px"
};

const buttonStyle = (bgColor) => ({
  background: bgColor,
  color: "#fff",
  padding: "6px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.85rem",
  whiteSpace: "nowrap"
});

export default Bookings;
