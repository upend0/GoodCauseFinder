import ProjectTile from "./ProjectTile"
import useFetch from "./useFetch"

const ProjectArea = () => {
  // Get the data about the projects
  const { data } = useFetch('http://localhost:5080/projects')

  console.log(data);

  return (
    <div className="container">
      {/* <h2>Tile Area</h2> */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 my-4">
        {/* Conditional rendering, so these tiles only shows when the fetch is done and there are some values */}
        {/* Loop though the projects array and send the data to each tile */}
        {data && data.projects.map(project => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectArea