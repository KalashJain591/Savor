import React from "react";

export default function OrderUserInfo(props) {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        <p>Name:{props.ordername}</p>
        <p>
          Address :{props.address} {props.addressoptional} {props.state}{" "}
          {props.city} {props.postalcode}
        </p>
        <p>Phone No. :{props.ordermobile1}</p>
        <p>Phone No. (Optional):{props.ordermobile2}</p>
        <p>
          Address: {props.address} {props.addressoptional}
        </p>
      </div>
    </div>
  );
}
