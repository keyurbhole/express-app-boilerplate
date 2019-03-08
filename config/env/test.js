export default {
    db: {
        uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/express-test',
        options: {
            user: '',
            pass: '',
            useNewUrlParser: true,
            useCreateIndex: true
        },
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    }
}