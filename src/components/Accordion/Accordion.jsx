export default function Accordion({ header = "", content }) {
  const accordionID = "acc" + Math.ceil(Math.random() * 999999999)
  return (
    <div className="accordion-item p-0">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${accordionID}`}
          aria-expanded="true"
          aria-controls={`${accordionID}`}>
          {header}
        </button>
      </h2>

      <div id={`${accordionID}`} className="accordion-collapse collapse show">
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  )
}
