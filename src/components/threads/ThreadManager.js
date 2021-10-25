const dbURL = "http://localhost:8088"

export const getAllThreads = () => {
    return fetch(`${dbURL}/threads`).then(res => res.json())
}

export const getThreadById = (threadId) => {
    return fetch(`${dbURL}/threads/${threadId}`).then(res => res.json())
}