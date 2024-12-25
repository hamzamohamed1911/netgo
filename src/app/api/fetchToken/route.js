// app/api/fetchToken/route.js

export async function POST(req) {
    try {
      const formData = new URLSearchParams();
      formData.append("client_id", "fd5063b146b4d31128b58df6f21db0ae");
      formData.append("client_secret", "X9m2pQuotELHMHIt3qog5ZpKGGsCUxmZh89fn8iQ");
      formData.append("grant_type", "client_credentials");
  
      const response = await fetch("https://sandbox-partners-api.airalo.com/v2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });
  
      if (!response.ok) {
        return new Response(
          JSON.stringify({ error: `HTTP error! Status: ${response.status}` }),
          { status: response.status }
        );
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch token", details: error.message }),
        { status: 500 }
      );
    }
  }

