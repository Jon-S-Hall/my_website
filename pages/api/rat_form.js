// unused, currently we handle scoring client side.
export default function rat_handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Get keys and values returned in body

    const keys = Object.keys(body)
    const values = keys.map(key => body[key]);

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` })
}