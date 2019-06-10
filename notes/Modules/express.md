Middleware can attach extra information on request body.... remember to call next when done!!

GET to fetch info, POST to add info, PUT to update entire document, PATCH to update specific field, DELETE to remove document

res.status(code).send/json/...()    // Send status code and the result

mongoose provides a outline for documents as JSON object, allowing easier access



