import { useState } from "react";
import lightOn from "./images/light-bulb-on.png";
import lightOff from "./images/light-bulb-off.png";

export default function App() {
  const [buttonInvisible, setbuttonInvisible] = useState(false);
  const [alertToggle, setAlertToggle] = useState(false);

  return (
    <div className="container">
      <div className="row text-center py-4">
        <div className="col">
          <h1>Dom Exercises</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2">
        <div className="col p-3">
          <div className="card h-100">
            <h4 className="card-header">Buttons</h4>
            <div className="card-body">
              <p className="card-text">
                Click the button to display your name.
              </p>
              <div
                id="display-name"
                className={
                  buttonInvisible
                    ? "alert alert-success "
                    : "alert alert-success invisible"
                }
              >
                Aaron
              </div>
              <button
                id="display-name-button"
                type="button"
                className="btn btn-primary btn-block"
              >
                Click
              </button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card h-100">
            <h4 className="card-header">Mouse Over</h4>
            <div className="card-body">
              <p className="card-text">
                Switch the light on when your mouse hovers over it.
              </p>
              <img
                id="light-bulb"
                className="mx-auto d-block"
                src={lightOff}
                alt="light bulb"
              />
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card h-100">
            <h4 className="card-header">Toggle</h4>
            <div className="card-body">
              <p className="card-text">
                Clicking the button should toggle the alert on and off.
              </p>
              <div
                id="toggle-alert"
                className={
                  alertToggle
                    ? "alert alert-success "
                    : "alert alert-success invisible"
                }
              >
                Hello world!
              </div>
              <button
                id="toggle-button"
                type="button"
                className="btn btn-primary btn-block"
              >
                On
              </button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card h-100">
            <h4 className="card-header">Validate</h4>
            <div className="card-body">
              <p className="card-text">
                Validate the text box to be at least 3 characters.
              </p>
              <form id="form-validate" noValidate>
                <div className="form-row">
                  <label htmlFor="form-first-name">First Name</label>
                  <input
                    type="text"
                    id="form-validate-first-name"
                    className="form-control"
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="form-row my-3">
                  <button className="btn btn-primary btn-block" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card h-100">
            <h4 className="card-header">Challenge: Lists</h4>
            <div className="card-body">
              <p className="card-text">
                When the "Add" button is clicked, add a new hobby to the list.
              </p>
              <form id="form-hobby" className="needs-validation">
                <div className="form-row">
                  <div className="col-8">
                    <input
                      type="text"
                      id="form-hobby-text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col">
                    <button className="btn btn-primary btn-block" type="submit">
                      Add
                    </button>
                  </div>
                </div>
              </form>
              <ul id="hobby-list" className="list-group mt-3">
                <li className="list-group-item">Eating pizza</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="card h-100">
            <h4 className="card-header">Challenge: Lists (Part 2)</h4>
            <div className="card-body">
              <p className="card-text">
                When the icon next to a hobby is clicked, remove it from the
                list.
              </p>
              <ul id="hobby-list-2" className="list-group mt-3">
                <li className="hobby list-group-item d-flex justify-content-between align-items-center">
                  Eating pizza
                  <button className="remove-hobby badge badge-danger">x</button>
                </li>

                <li className="hobby list-group-item d-flex justify-content-between align-items-center">
                  Painting
                  <button className="remove-hobby badge badge-danger">x</button>
                </li>
                <li className="hobby list-group-item d-flex justify-content-between align-items-center">
                  Playing video games
                  <button className="remove-hobby badge badge-danger">x</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
