import React, { useState } from 'react'
import PaymentSummary from '../Cart/PaymentSummary'
export default function CheckoutForm() {

    // creating  a state to store the values from the user
    const [Record, SetRecord] = useState([]);




    const [BillingInfo, setBillingInfo] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        address1: "",
        address2: "",
        state: "",
        city: "",
        zip: "",

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
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            address1: "",
            address2: "",
            state: "",
            city: "",
            zip: "",
            mobileNumber1: "",
            mobileNumber2: "",

        });
    }

    return (

        <div>
            <div className="container mb-4">
                <main>

                    <div className="row d-flex .flex-wrap-reverse">
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Billing address</h4>
                            <form action='' onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label className="form-label" >First name</label>
                                        <input type="text" className="form-control" name="firstName" placeholder=" " value={BillingInfo.firstName} onChange={handleInput} required />
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="lastName" className="form-label" >Last name</label>
                                        <input type="text" className="form-control" name="lastName" placeholder="" value={BillingInfo.lastName} onChange={handleInput} required />

                                    </div>

                                    <div className="col-12">
                                        <label for="username" className="form-label" >Username</label>
                                        <div className="input-group">
                                            <span className="input-group-text">@</span>
                                            <input type="text" className="form-control" name="userName" placeholder="Username" value={BillingInfo.userName} onChange={handleInput} required />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                        <input type="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' className="form-control" name='email' placeholder="you@example.com" value={BillingInfo.email} onChange={handleInput} required />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address" className="form-label"  >Address1</label>
                                        <input type="text" className="form-control" id="address" name='address1' placeholder="1234 Main St" value={BillingInfo.address1} onChange={handleInput} required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address2" className="form-label" >Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" name='address2' value={BillingInfo.address2} onChange={handleInput} required />
                                    </div>



                                    <div className="col-md-4">
                                        <label for="state" className="form-label">State</label>
                                        <select className="form-select" id="state" placeholder='choose...' name='state' value={BillingInfo.state} onChange={handleInput} required >

                                            <option>Madhya Pradesh</option>

                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label for="city" className="form-label">City</label>
                                        <select className="form-select" id="country" name='city' placeholder='choose...' value={BillingInfo.city} onChange={handleInput} required>

                                            <option>Indore</option>
                                            <option>Ujjain</option>
                                            <option>Bhopal</option>
                                            <option>Dewas</option>
                                        </select>

                                    </div>

                                    <div className="col-md-3">
                                        <label for="zip" className="form-label" >Postal Code</label>
                                        <input type="text" className="form-control" name="zip" value={BillingInfo.zip} onChange={handleInput} required />
                                        <div className="invalid-feedback">
                                            Please fill  the postal code
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label for="username" className="form-label" >Mobile number 1:</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+91</span>
                                            <input type="tel"  pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$" className="form-control" name="userName" placeholder="enter your 10-digit  mobile number" value={BillingInfo.mobileNumber1}  minlength="10" maxlength="10" onChange={handleInput} required />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                        <label for="username" className="form-label" >Mobile number 2:</label>
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

                                <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                        <label className="form-check-label" for="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="paypal">PayPal</label>
                                    </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label for="cc-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label for="cc-number" className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="cc-expiration" className="form-label">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="cc-cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

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
