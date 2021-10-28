


export const stitchSave = (newStitchProj) => {
    return fetch("http://localhost:8088/projects", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(newStitchProj),
    }).then(res => res.json());
}

export const getStitches = () => {
    return fetch("http://localhost:8088/projects")
    .then(res => res.json())
}

export const deleteStitch = (id) => {
    return fetch(`http://localhost:8088/projects/${id}`, {
        method:"DELETE"
    })
    .then(res => res.json())
}

export const getStitchById = (stitchId) => {
    return fetch(`http://localhost:8088/projects/${stitchId}`)
    .then(res => res.json())
}

export const updateStitch = (editedStitch) => {
    return fetch(`http://localhost:8088/projects/${editedStitch.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedStitch)
    }).then(data => data.json());
  }