


export const stitchSave = (newStitch) => {
    return fetch("http://localhost:8088/stitches", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(newStitch),
    }).then(res => res.json());
}

export const getStitches = () => {
    return fetch("http://localhost:8088/stitches")
    .then(res => res.json())
}

export const deleteStitch = (id) => {
    return fetch(`http://localhost:8088/stitches/${id}`, {
        method:"DELETE"
    })
    .then(res => res.json())
}

export const getStitchById = (stitchId) => {
    return fetch(`http://localhost:8088/stitches/${stitchId}`)
    .then(res => res.json())
}

export const updateStitch = (editedStitch) => {
    return fetch(`http://localhost:8088/stitches/${editedStitch.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedStitch)
    }).then(data => data.json());
  }

export const getStitchByUser = (target, userId, expandArray = []) => {
    let queryParam = "?";
    if(expandArray.length > 0) {
        expandArray.forEach((elem) => {
            queryParam += `_expand=${elem}&`;
        });
    }
    queryParam += `userId=${userId}`;
    return fetch(`http://localhost:8088/${target}/${queryParam}`)
    .then(res => res.json())
}