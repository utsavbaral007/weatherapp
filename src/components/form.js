import React from 'react'
export default function From(props) {
	return (
		<div className="container">
			<div>{props.error ? error() : null}</div>
			<form onSubmit={props.loadWeather}>
				<div className="row">
					<div className="col-md-3 offset-md-2">
						<input
							type="text"
							className="form-control"
							placeholder="City"
							name="city"
							onChange={() => props.setError(false)}
							autoComplete="off"
						/>
					</div>
					<div className="col-md-3">
						<input
							type="text"
							className="form-control"
							placeholder="Country"
							name="country"
							onChange={() => props.setError(false)}
							autoComplete="off"
						/>
					</div>
					<div className="col-md-3 mt-md-0 text-md-left">
						<button className="btn btn-warning">Get Weather</button>
					</div>
				</div>
			</form>
		</div>
	)
}
function error() {
	return (
		<div className="alert alert-danger mx-5" role="alert">
			please enter city and country
		</div>
	)
}
