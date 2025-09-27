
function AboutCard(props) {
  return (
    <div className='card-about'>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default AboutCard
