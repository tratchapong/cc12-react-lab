export default function Footer() {
    return (
      <div className="container">
      
      <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center flex-grow-1">
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>
  
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <i className="bi bi-facebook"></i>
          </li>
          <li className="ms-3">
            <i className="bi bi-instagram"></i>
          </li>
          <li className="ms-3">
            <i className="bi bi-twitter"></i>
          </li>
        </ul>
      </footer>
      </div>
    );
  }
