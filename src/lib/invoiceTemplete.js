export const bookingInvoiceTemplate = ({
  bookingId,
  Service_Name,
  duration,
  region,
  district,
  upazila,
  address,
  totalCost,
  email,
  createdAt,
}) => {
  return `
  <div style="font-family: Arial, sans-serif; padding: 20px; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
    <div>
      <h2 style="margin:0;">Care.xyz</h2>
      <p style="margin:0; color:gray;">Trusted Baby Sitting & Elderly Care Service</p>
    </div>
    <img src="https://i.ibb.co.com/RTkF6y9T/image.png" width="120px"/>
  </div>

  <h3 style="border-bottom:2px solid #eee; padding-bottom:10px;">Booking Invoice</h3>

  <p><strong>Booking ID:</strong> ${bookingId}</p>
  <p><strong>Customer Email:</strong> ${email}</p>
  <p><strong>Date:</strong> ${new Date(createdAt).toLocaleString()}</p>

  <table width="100%" border="1" cellspacing="0" cellpadding="8" style="margin-top:20px; border-collapse:collapse;">
    <thead style="background:#f1f5f9;">
      <tr>
        <th align="left">Service</th>
        <th>Duration</th>
        <th align="right">Cost</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>${Service_Name}</td>
        <td align="center">${duration}</td>
        <td align="right">৳${totalCost}</td>
      </tr>
    </tbody>
  </table>

  <h3 style="margin-top:20px;">Service Location</h3>

  <table width="100%" border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;">
    <tbody>
      <tr>
        <td><strong>Division</strong></td>
        <td>${region}</td>
      </tr>
      <tr>
        <td><strong>District</strong></td>
        <td>${district}</td>
      </tr>
      <tr>
        <td><strong>Upazila</strong></td>
        <td>${upazila}</td>
      </tr>
      <tr>
        <td><strong>Full Address</strong></td>
        <td>${address}</td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top:25px; padding:15px; background:#e0f2fe;">
    <h3 style="margin:0;">Total Cost: ৳${totalCost}</h3>
  </div>

  <p style="margin-top:25px; color:gray;">
    Thank you for booking with Care.xyz ❤️ <br/>
    Our caregiver team will contact you shortly.
  </p>

</div>
`;
};
