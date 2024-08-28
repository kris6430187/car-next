export async function GET(request) {
    return Response.json({rate: process.env.VAT_RATE});
    
}