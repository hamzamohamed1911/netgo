export async function GET(req) {
  const url = new URL(req.url);
  const limit = url.searchParams.get("limit") || 15;
  const offset = url.searchParams.get("offset") || 0;
  const filterType = url.searchParams.get("filter[type]"); 
  const authorizationHeader = req.headers.get("Authorization");

  try {
    const apiUrl = `https://sandbox-partners-api.airalo.com/v2/packages?limit=${limit}&offset=${offset}${
      filterType ? `&filter[type]=${filterType}` : ""
    }`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: authorizationHeader,
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch packages" }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error in fetchPackages API:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
