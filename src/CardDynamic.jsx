export default function CardDynamic(props) {
    return (
      <div className="card">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <a href="">{props.link}</a>
      </div>
    );
  }