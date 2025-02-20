import AWS from 'aws-sdk'

AWS.config.update({
    region: 'us-east-1'
})

const dynamodb = new AWS.DynamoDB.DocumentClient()
const userTable = 'michael-users'


export const getUser = async (username) => {
    const params = {
        TableName: userTable,
        Key: {
            username: username
        }
    }

    return await dynamodb.get(params).promise().then(response => {
        return response.item
    }, error => {
        console.error('There is an error getting user', error);
    });
}

export const saveUser = async (user) => {
    const params = {
        TableName: userTable,
        Item: user
    }
    return await dynamodb.put(params).promise().then(() => {
        return true
    }, error => {
        console.error('There is an error saving user', error);
    })
}