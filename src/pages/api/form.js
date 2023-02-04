export default function form(req, res) {
    const body = req.body
    console.log(body, "hiii");
    if (!body.name || !body.contact) {
        return res.status(400).json({ data: "Name or Contact is not found!" })
    }
    res.status(200).json({
        "name": `${body.name}`,
        "phone": ` ${body.contact}`,
        "email": `${body.email}`
    })
}