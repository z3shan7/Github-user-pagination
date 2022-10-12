const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
    const respone = await fetch(url);
    const data = await respone.json() ;
    return data
}

export default fetchFollowers
