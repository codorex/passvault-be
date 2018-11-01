module.exports = {
    Store: {
        Users: [ 
            { 
                username: 'momi', 
                password: '' 
            } 
        ],
        Applications: [
            { 
                id: '7dc71ff2-68f6-46d0-8c26-5c34c06433c3',
                name: 'Facebook'
            }
        ],
        Accounts: [
            {
                id: '1cd54fa3-68f6-46d2-5c26-5c34c06434c9',
                applicationId: '7dc71ff2-68f6-46d0-8c26-5c34c06433c3',
                firstName: '',
                lastName: '',
                email: 'momi@momi.com'
            }
        ],
        Passwords: [
            {
                id: 'b9ab4752-6702-4806-b817-78523a290fe5',
                accountId: '1cd54fa3-68f6-46d2-5c26-5c34c06434c9',
                password: 'password123'
            }
        ]
    }
}