import React from 'react'
export default function Weather(props) {
	return (
		<div className="container">
			<h1>{props.city}</h1>
			{props.temperature ? <h1>{props.temperature}&deg;C</h1> : null}
			{minmaxTemp(props.minTemp, props.maxTemp)}
			<h3>{props.status}</h3>
		</div>
	)
}
function minmaxTemp(min, max) {
	if (min && max) {
		return (
			<h3>
				<span className="minTemp">min:&nbsp;{min}&deg;C</span>{' '}
				&nbsp;&nbsp;&nbsp;&nbsp;
				<span className="maxTemp">max:&nbsp;{max}&deg;C</span>
			</h3>
		)
	}
}
