export async function GET(request, {params}) {
    const amount = parseFloat(params.amount) / 10;
    const rate = parseFloat(process.env.VAT_RATE);
    const vat = (Math.round(amount * rate, 2) *10) / 100;
    return Response.json({
      rate,
      amount,
      vat,
    });
  }