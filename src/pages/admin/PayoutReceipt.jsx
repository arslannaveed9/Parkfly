import React, { useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import PageHeader from '../../components/PageHeader';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PayoutReceipt = () => {
  const invoiceRef = useRef();

  const handleDownload = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Payout_Receipt.pdf');
    });
  };

  // Sample data (replace with dynamic props later)
  const totalBookings = 45;
  const totalDays = 122;
  const baseRatePerDay = 10;
  const totalBaseAmount = baseRatePerDay * totalDays;
  const commission = totalBaseAmount * 0.10;
  const serviceCharges = 6 * totalBookings;
  const tax = totalBaseAmount * 0.05;
  const netPaid = totalBaseAmount + tax;

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', padding: '2rem', width: '100%' }}>
        <PageHeader title="Payout Receipt" />

        <div ref={invoiceRef} style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontFamily: 'Arial, sans-serif',
          color: '#1f2937'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>PAYOUT RECEIPT</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <p><strong>Vendor:</strong> Ali Khan</p>
              <p><strong>Account Title:</strong> Ali Khan</p>
              <p><strong>Bank:</strong> Meezan Bank</p>
              <p><strong>IBAN:</strong> PK00MEZN0000001234567890</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p><strong>Payout ID:</strong> P2024</p>
              <p><strong>Account #:</strong> ****5678</p>
              <p><strong>Payout Date:</strong> 28 May 2025</p>
              <p><strong>Status:</strong> <span style={{ color: 'green' }}>Paid</span></p>
            </div>
          </div>

          <hr />

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Booking Summary (21 May - 26 May)</h3>
            <p><strong>Total Number of Bookings:</strong> {totalBookings}</p>
            <p><strong>Total Days Booked:</strong> {totalDays} days</p>
            <p><strong>Base Rate per Day:</strong> $ {baseRatePerDay}</p>
            <p><strong>Total Base Amount:</strong> $ {totalBaseAmount}</p>

            <h3 style={{ marginTop: '1.5rem' }}>Amount Breakdown</h3>
            <p><strong>Commission (10%):</strong> $ {commission.toFixed(2)}</p>
            <p><strong>Service Charges:</strong> $ {serviceCharges.toFixed(2)}</p>
            <p><strong>Tax Collected (5%):</strong> $ {tax.toFixed(2)}</p>

            <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
              <strong>Total Payable:</strong> <span style={{ color: '#2563EB' }}>$ {netPaid.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={handleDownload}
            style={{
              padding: '10px 20px',
              background: '#2563EB',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayoutReceipt;
