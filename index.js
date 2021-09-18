'use strict'
const axios = require('axios');

module.exports.handler = function(event, context, callback) {
    console.log(JSON.stringify(event));

    const WEBHOOK_URL  = "" //enter MS team webhook url here
    const message = {
        "text": event['Records'][0]['Sns']['Message']
    }

    axios({
        method: 'post',
        url: WEBHOOK_URL,
        data: message
    });
}