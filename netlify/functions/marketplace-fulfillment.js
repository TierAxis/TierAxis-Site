exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
      body: "Lyra Pipeline Test — AWS Marketplace SaaS fulfillment endpoint. Internal test listing, not for purchase.",
    };
  }
  if (event.httpMethod === "POST") {
    const raw = event.isBase64Encoded ? Buffer.from(event.body || "", "base64").toString("utf8") : (event.body || "");
    const token = new URLSearchParams(raw).get("x-amzn-marketplace-token");
    return {
      statusCode: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
      body: token ? "Registration received." : "Awaiting token.",
    };
  }
  return { statusCode: 405, body: "Method not allowed" };
};
