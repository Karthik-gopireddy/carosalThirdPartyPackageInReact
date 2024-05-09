// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-container">
      <h1 className="heading">PLANETS</h1>
      <img src={imageUrl} alt={`Planet ${name}`} className="planets-image" />
      <h1 className="planets-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
