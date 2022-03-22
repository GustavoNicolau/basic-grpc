const grpc = require('grpc')

const NoteService = grpc.load('../notes.proto').NoteService

const client = new NoteService('localhost:3333', 
    grpc.credentials.createInsecure()
)


module.exports = client