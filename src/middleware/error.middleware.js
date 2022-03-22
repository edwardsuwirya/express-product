const errorMiddleware = (error, req, res) => {
    console.log("Error Handling Middleware")
    console.log('Path: ', req.path)
    console.error('Error: ', error)

    if (error.type === 'REDIRECT')
        res.redirect('/error')
    else if (error.type === 'TIME_OUT')
        res.status(408).send(error)
    else if (error.type === 'DATA_NOT_FOUND')
        res.status(200).send(error)
    else
        res.status(500).send(error)
}

module.exports = errorMiddleware

