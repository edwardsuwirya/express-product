const errorMiddleware = (error, req, res, next) => {
    req.log.error(error.message)

    if (error.type === 'REDIRECT')
        res.redirect('/error')
    else if (error.type === 'TIME_OUT')
        res.status(408).json({status: 'ERROR', message: 'Time out'})
    else if (error.type === 'DATA_NOT_FOUND')
        res.status(200).json({status: 'SUCCESS', message: 'Data not found'})
    else
        res.status(500).json({status: 'ERROR', message: error.message})
}

module.exports = errorMiddleware

