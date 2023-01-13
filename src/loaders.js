const URL = "https://portfolioapp-l0fn.onrender.com"

export const projectsLoader = async ()=> {

    const response = await fetch (URL+"/projects")
    const projects = await response.json()
    console.log(projects)
    return projects

}

export const aboutLoader = async ()=> {

    const response = await fetch(URL+"/about")
    const about = await response.json()
    return about

}