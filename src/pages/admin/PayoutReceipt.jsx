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
            <h3>Amount Breakdown</h3>
            <p><strong>Total Bookings Amount:</strong> PKR 150,000</p>
            <p><strong>Commission (10%):</strong> PKR 15,000</p>
            <p><strong>Tax (5%):</strong> PKR 6,750</p>
            <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
              <strong>Net Paid:</strong> <span style={{ color: '#2563EB' }}>PKR 128,250</span>
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
