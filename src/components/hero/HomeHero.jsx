import foto from '../../foto/monika.jpg';

export function HomeHero() {
    return (
        <div className="px-4 py-5 my-5 text-center">
    <img src={foto} alt="Photo" width="20%" />
    <h1 className="display-5 fw-bold text-body-emphasis">Monika Kasauskaitė</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Junior Full-stack developer</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-warning rounded-pill px-3">Contact me</button>
        <button type="button" className="btn btn-warning rounded-pill px-3">My GitHub</button>
      </div>
    </div>
  </div>

  
    )
}