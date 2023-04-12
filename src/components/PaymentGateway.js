import { useState } from "react";

function PaymentGateway() {

    const [paymentType, setPaymentType] = useState("cash");


    return (
        <div className="payemnt-gateway">
            <p className="title">Choose a way to pay</p>
            <div className="sources">
                <button className={`cmn-theme-btn ${paymentType === "cash" ? "active" : ""}`} onClick={() => setPaymentType("cash")} >Cash</button>
                <button className={`cmn-theme-btn ${paymentType === "credit_card" ? "active" : ""}`} onClick={() => setPaymentType("credit_card")}>Credit Card</button>
                <button className={`cmn-theme-btn ${paymentType === "ewallet_v_bank" ? "active" : ""}`} onClick={() => setPaymentType("ewallet_v_bank")} >eWallet/<br />Virtual bank</button>
            </div>
            <div className="sources">
                <label class="checkbox-container">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a target="_blank" href="#">do eiusmod</a>
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
    );
}

export default PaymentGateway;
