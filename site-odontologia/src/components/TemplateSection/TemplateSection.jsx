import './TemplateSection.css'

function TemplateSection(props) {
  return (
    <section className={props.className}>
      {props.children}
    </section>
  )
}

export default TemplateSection