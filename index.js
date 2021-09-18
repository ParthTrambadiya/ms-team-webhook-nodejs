'use strict'
const axios = require('axios');

module.exports.handler = function(event, context, callback) {
    console.log(JSON.stringify(event));

    const WEBHOOK_URL  = "https://charotaruniversity.webhook.office.com/webhookb2/330aadad-3f48-44ce-8d74-9cb106f20e2f@8dbd2884-120c-413b-80b2-1117dd3469a4/IncomingWebhook/cbea8ef12e534b10a1721e6a4fc49bc8/f30dfdc6-e850-4ffe-8044-b1e3b4f8a9e4" //enter MS team webhook url here
    const message = {
        "text": event['Records'][0]['Sns']['Message']
    }

    axios({
        method: 'post',
        url: WEBHOOK_URL,
        data: message
    });
}