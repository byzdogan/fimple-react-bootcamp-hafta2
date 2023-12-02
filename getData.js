import axios from 'axios'

async function getData (userId) {
    try {
        const [user, post] = await Promise.all([
            axios('https://jsonplaceholder.typicode.com/users/'+ userId),
            axios('https://jsonplaceholder.typicode.com/posts?userId='+ userId)
        ])
        const data = { ...user.data, posts: post.data }
        console.log(data)
    } catch(error) {
        console.log(error)
    }    
}

export default getData