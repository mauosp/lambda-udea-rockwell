console.log('Loading function');

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Community Info: ', event.message);
    console.log('Console for test #1');
    return "Hello People From The "+event.message;
    // throw new Error('Something went wrong');
};