import React, { Component } from "react";

class Calc extends Component {
  render() {
    return (
      <div className="container">
        <div className="card p-4 mt-3">
          <h3>Calculator</h3>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div class="form-group">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div class="form-group">
              <input type="number" class="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div class="form-group">
              <select class="form-control" id="sel-op">
                <option selected disabled>Select Operator</option>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div class="form-group">
              <input type="number" class="form-control" readOnly/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
