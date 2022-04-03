function config(token=''){
    return { headers: { Authorization: `Bearer ${token}` }}
}

export default config