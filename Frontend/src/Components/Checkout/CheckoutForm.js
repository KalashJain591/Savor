import React, { useState } from 'react'
import PaymentSummary from '../Cart/PaymentSummary'
export default function CheckoutForm() {

    // creating  a state to store the values from the user
    const [Record, SetRecord] = useState([]);

    const [BillingInfo, setBillingInfo] = useState({
        name: "",
            email: "",
            address1: "",
            address2: "",
            state: "",
            city: "",
            pincode: "",
            mobileNumber1: "",
            mobileNumber2: "",
    })

    // 
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setBillingInfo({ ...BillingInfo, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...BillingInfo, id: new Date().getTime().toString() }
        console.log(newRecord);
        SetRecord([...Record, newRecord]);
        setBillingInfo({
            name: "",
            email: "",
            address1: "",
            address2: "",
            state: "",
            city: "",
            pincode: "",
            mobileNumber1: "",
            mobileNumber2: "",
        });
    }

    return (
        <div>
            <div className="container my-4">
                <main>
                    <div className="row d-flex .flex-wrap-reverse">
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Billing address</h4>
                            <form action='' onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label className="form-label" >Name</label>
                                        <input type="text" className="form-control" name="name" placeholder=" " value={BillingInfo.name} onChange={handleInput} required />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                        <input type="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' className="form-control" name='email' placeholder="you@example.com" value={BillingInfo.email} onChange={handleInput} required />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address htmlFor shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label"  >Address1</label>
                                        <input type="text" className="form-control" id="address" name='address1' placeholder="1234 Main St" value={BillingInfo.address1} onChange={handleInput} required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label" >Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" name='address2' value={BillingInfo.address2} onChange={handleInput} required />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select className="form-select" id="state" placeholder='choose...' name='state' value={BillingInfo.state} onChange={handleInput} required >
                                            <option>Madhya Pradesh</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <select className="form-select" id="country" name='city' placeholder='choose...' value={BillingInfo.city} onChange={handleInput} required>
                                            <option>Indore</option>
                                            <option>Ujjain</option>
                                            <option>Bhopal</option>
                                            <option>Dewas</option>
                                        </select>

                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label" >Postal Code</label>
                                        <input type="text" className="form-control" name="pincode" value={BillingInfo.pincode} onChange={handleInput} required />
                                        <div className="invalid-feedback">
                                            Please fill  the postal code
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label" >Mobile number 1:</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+91</span>
                                            <input type="tel"  pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$" className="form-control" name="userName" placeholder="enter your 10-digit  mobile number" value={BillingInfo.mobileNumber1}  minlength="10" maxlength="10" onChange={handleInput} required />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                        <label htmlFor="username" className="form-label" >Mobile number 2:</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+91</span>
                                            <input type="tel"  pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$" className="form-control" name="userName" placeholder="enter your 10-digit  mobile  number" value={BillingInfo.mobileNumber2} minlength="10" maxlength="10" onChange={handleInput} />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <hr className="my-4" />

                                {/* <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div> */}

                                {/* <hr className="my-4" /> */}

                                <button className=" btn btn-primary btn-lg mb-4" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                        <div className='col-md-5 col-lg-4'>
                            <PaymentSummary />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
