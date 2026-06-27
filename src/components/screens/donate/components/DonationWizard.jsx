import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { HeartFill, PersonBoundingBox, BookHalf, StarFill, CreditCard, Bank2, Wallet2, QrCodeScan } from "react-bootstrap-icons";
import styles from "../donate.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";

const predefinedImpacts = [
  { value: 500, label: "Feeds one family", icon: <HeartFill /> },
  { value: 1000, label: "Supports skill development", icon: <PersonBoundingBox /> },
  { value: 2500, label: "Provides educational resources", icon: <BookHalf />, recommended: true },
  { value: 5000, label: "Empowers a woman entrepreneur", icon: <StarFill /> },
];

const paymentMethods = [
  { id: 'upi', label: 'UPI', icon: <QrCodeScan /> },
  { id: 'card', label: 'Card', icon: <CreditCard /> },
  { id: 'netbanking', label: 'Net Banking', icon: <Bank2 /> },
  { id: 'wallet', label: 'Wallet', icon: <Wallet2 /> },
];

const DonationWizard = () => {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(2500);
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState("");
  const [payMethod, setPayMethod] = useState("upi");
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pan: '', anonymous: false });

  const handleImpactSelect = (val) => {
    setAmount(val);
    setIsCustom(false);
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomVal(val);
    setAmount(val ? parseInt(val) : 0);
    setIsCustom(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Processing Donation:", {
      frequency,
      amount,
      payMethod,
      ...formData
    });
    alert(`Thank you for choosing to donate ₹${amount}! We are processing your request via ${payMethod}.`);
  };

  return (
    <section className={styles.wizardSection}>
      <CustomContainer>
        <div className={styles.wizardContainer} data-aos="fade-up">
          <h2 className={styles.wizardTitle}>Choose Your Impact</h2>
          
          <div className={styles.frequencyToggle}>
            <button className={frequency === 'one-time' ? styles.active : ''} onClick={() => setFrequency('one-time')}>One-Time</button>
            <button className={frequency === 'monthly' ? styles.active : ''} onClick={() => setFrequency('monthly')}>Monthly Supporter ❤️</button>
            <button className={frequency === 'annual' ? styles.active : ''} onClick={() => setFrequency('annual')}>Annual</button>
          </div>

          <div className={styles.impactCards}>
            {predefinedImpacts.map(item => (
              <div 
                key={item.value} 
                className={`${styles.impactCard} ${!isCustom && amount === item.value ? styles.active : ''}`}
                onClick={() => handleImpactSelect(item.value)}
              >
                {item.recommended && <div className={styles.badgeRecommended}>Recommended</div>}
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.cardAmount}>&#8377;{item.value}</div>
                <div className={styles.cardDesc}>{item.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.customDonation}>
            <h5 className="text-center mb-3">Or enter a custom amount</h5>
            <div className={styles.customInputWrapper}>
              <span className={styles.currencyPrefix}>&#8377;</span>
              <input 
                type="text" 
                className={styles.customInput} 
                placeholder="Other Amount" 
                value={isCustom ? customVal : ''}
                onChange={handleCustomChange}
                onClick={() => setIsCustom(true)}
              />
            </div>
            <div className={styles.liveImpactMessage}>
              {amount > 0 && isCustom && `Your donation of ₹${amount} can support ${Math.max(1, Math.floor(amount / 500))} initiatives.`}
            </div>
          </div>

          <form className={styles.formSection} onSubmit={handleSubmit}>
            <h4 className="mb-4">Donor Information</h4>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <FloatingLabel label="Full Name">
                  <Form.Control type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} disabled={formData.anonymous} />
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="Email Address">
                  <Form.Control type="email" placeholder="name@example.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="Phone Number">
                  <Form.Control type="tel" placeholder="Phone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </FloatingLabel>
              </div>
              <div className="col-md-6">
                <FloatingLabel label="PAN (Optional for Tax Receipt)">
                  <Form.Control type="text" placeholder="PAN Number" value={formData.pan} onChange={e => setFormData({...formData, pan: e.target.value})} />
                </FloatingLabel>
              </div>
            </div>
            
            <Form.Check 
              type="switch"
              id="anonymous-switch"
              label="Donate Anonymously"
              className="mb-4"
              checked={formData.anonymous}
              onChange={e => setFormData({...formData, anonymous: e.target.checked, name: e.target.checked ? 'Anonymous' : ''})}
            />

            <h4 className="mb-3">Payment Method</h4>
            <div className={styles.paymentMethods}>
              {paymentMethods.map(pm => (
                <div 
                  key={pm.id} 
                  className={`${styles.payCard} ${payMethod === pm.id ? styles.active : ''}`}
                  onClick={() => setPayMethod(pm.id)}
                >
                  {pm.icon} {pm.label}
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <CustomButton type="submit" variant="orange" size="lg" fullWidth={false}>
                Complete Donation of &#8377;{amount || 0}
              </CustomButton>
            </div>
          </form>

        </div>
      </CustomContainer>
    </section>
  );
};

export default DonationWizard;
