// v1.1.1 - Triggering xneelo deployment
import React, { useMemo, useState } from 'react';
import { useEditor } from '../context/EditorContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import './QuotesPage.css';

const QuotesPage = () => {
  const { data: proposalData } = useEditor();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [copied, setCopied] = useState(false);

  const getApprovalText = () => {
    return `The proposal has been approved. \n\nTotals:\nOnce-off: ${formatCurrency(totals.oneTime)}\nMonthly: ${formatCurrency(totals.monthly)}\n\nNext steps are being initiated.`;
  };

  const handleApprove = () => {
    const recipient = "francois.bigondigital@gmail.com";
    const subject = `Proposal Approved: ${proposalData.client?.name || 'PNG Tours'}`;
    const approvalText = getApprovalText();
    
    // Attempt automatic clipboard copy
    try {
      navigator.clipboard.writeText(approvalText);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }

    // Trigger original mailto
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`;
    window.location.href = mailtoUrl;
    
    setIsApproved(true);
    setShowConfirm(false);
  };

  const handleManualCopy = () => {
    navigator.clipboard.writeText(getApprovalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmail = () => {
    const recipient = "francois.bigondigital@gmail.com";
    const subject = `Proposal Approved: ${proposalData.client?.name || 'PNG Tours'}`;
    const approvalText = getApprovalText();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(approvalText)}`;
    window.open(gmailUrl, '_blank');
  };

  const pricingSections = useMemo(() => {
    return proposalData.sections.filter(section => section.data && section.data.price);
  }, [proposalData]);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    // Extract numbers, removing currency symbol, commas and any /mo suffix
    const numericPart = priceStr.replace(/[^\d]/g, '');
    return parseInt(numericPart, 10) || 0;
  };

  const totals = useMemo(() => {
    let oneTime = 0;
    let monthly = 0;

    pricingSections.forEach(section => {
      const priceVal = parsePrice(section.data.price);
      if (section.data.price.toLowerCase().includes('/mo')) {
        monthly += priceVal;
      } else {
        oneTime += priceVal;
      }
    });

    return { oneTime, monthly };
  }, [pricingSections]);

  const formatCurrency = (val) => {
    return `R ${val.toLocaleString()}`;
  };

  return (
    <div className="quotes-page">
      <div className="quotes-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ChevronLeft size={20} /> Back to Proposal
          </Link>
          <div className="header-content">
            <h1 className="quotes-title">Investment Summary</h1>
            <p className="quotes-subtitle">Review quotes and approve the project plan for {proposalData.client?.name || 'PNG Tours'}.</p>
          </div>
        </div>
      </div>

      <div className="container quotes-container">
        <div className="quotes-grid">
          <div className="quotes-list-card glass-panel">
            <table className="quotes-table">
              <thead>
                <tr>
                  <th>Section</th>
                  <th className="text-right">Investment</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingSections.map((section, index) => (
                  <tr key={section.id || index}>
                    <td>
                      <div className="section-info">
                        <span className="section-name">{section.data.title || section.data.eyebrow}</span>
                        {section.data.price.toLowerCase().includes('/mo') && (
                          <span className="billing-tag">Monthly</span>
                        )}
                      </div>
                    </td>
                    <td className="text-right font-bold">
                      {section.data.price}
                    </td>
                    <td className="text-right">
                      <Link to={`/#${section.id}`} className="view-details-link">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {pricingSections.length === 0 && (
              <div className="empty-state">
                <p>No pricing items found in this proposal.</p>
              </div>
            )}
          </div>

          <div className="quotes-summary-sidebar">
            <div className="summary-card glass-panel dark">
              <h3>Total Investment</h3>
              <div className="summary-row">
                <span>Once-off Setup:</span>
                <span className="amount">{formatCurrency(totals.oneTime)}</span>
              </div>
              {totals.monthly > 0 && (
                <div className="summary-row monthly">
                  <span>Monthly Management:</span>
                  <span className="amount">{formatCurrency(totals.monthly)} /mo</span>
                </div>
              )}
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Grand Total (Excl. VAT):</span>
                <span className="amount">{formatCurrency(totals.oneTime + totals.monthly)}</span>
              </div>

              {isApproved ? (
                <div className="approval-success-container glass-panel">
                  <div className="success-header">
                    <CheckCircle2 size={32} className="success-icon" />
                    <h4>Project Approved!</h4>
                  </div>
                  <p className="success-msg">Approval details copied to clipboard. If your email didn't open, use the buttons below:</p>
                  <div className="success-actions">
                    <button className="btn-success-action" onClick={openGmail}>
                      Open in Gmail
                    </button>
                    <button className="btn-success-action outline" onClick={handleManualCopy}>
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                  </div>
                  <button className="btn-success-reset" onClick={() => setIsApproved(false)}>
                    <ChevronLeft size={16} /> Back
                  </button>
                </div>
              ) : !showConfirm ? (
                <button className="btn-approve-all" onClick={() => setShowConfirm(true)}>
                  <CheckCircle2 size={20} className="mr-2" /> Approve All & Proceed
                </button>
              ) : (
                <div className="approval-confirm-container">
                  <p className="confirm-text">Confirm project approval?</p>
                  <div className="confirm-buttons">
                    <button className="btn-confirm-yes" onClick={handleApprove}>
                      Yes, Approve
                    </button>
                    <button className="btn-confirm-no" onClick={() => setShowConfirm(false)}>
                      No
                    </button>
                  </div>
                </div>
              )}
              
              <Link to="/" className="btn-view-all">
                <FileText size={20} className="mr-2" /> View All Quotes (Proposal)
              </Link>
            </div>

            <div className="next-steps-info">
              <h4>Next Steps After Approval:</h4>
              <ul>
                <li>Invoice will be generated for setup fees.</li>
                <li>Onboarding session to be scheduled within 48h.</li>
                <li>Development of digital foundations begins.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;
