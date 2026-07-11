const MAX_FIELD_LENGTH = 1_500;

const json = (statusCode, body) => new Response(JSON.stringify(body), {
  status: statusCode,
  headers: { "Content-Type": "application/json" },
});

const text = (value) => String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH);

export default {
  async fetch(request) {
    if (request.method !== "POST") return json(405, { error: "Method not allowed" });

    try {
      const { name, email, organization, message, enquiryType, website } = await request.json();

      if (text(website)) return json(200, { ok: true });
      if (!text(name) || !text(email) || !text(message) || !text(enquiryType)) {
        return json(400, { error: "Missing required fields" });
      }

      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const from = process.env.TWILIO_FROM_NUMBER;
      const to = process.env.CONTACT_SMS_TO;

      if (!accountSid || !authToken || !from || !to) {
        console.error("Missing Twilio environment configuration");
        return json(500, { error: "SMS service is not configured" });
      }

      const sms = [
        "New portfolio enquiry",
        `Type: ${text(enquiryType)}`,
        `Name: ${text(name)}`,
        `Email: ${text(email)}`,
        text(organization) ? `Company: ${text(organization)}` : "",
        "",
        text(message),
      ].filter(Boolean).join("\n");

      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ To: to, From: from, Body: sms }),
      });

      if (!response.ok) {
        console.error("Twilio failed", response.status, await response.text());
        return json(502, { error: "SMS delivery failed" });
      }

      return json(200, { ok: true });
    } catch (error) {
      console.error("Contact SMS failed", error);
      return json(500, { error: "Unable to send SMS" });
    }
  },
};
