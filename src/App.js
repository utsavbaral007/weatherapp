import React, { useState } from 'react'
import Weather from './components/weather'
import Form from './components/form'
import Axios from 'axios'

const apiKey = 'b15e366e446a5d0843df7ca7c36c31e5'

export default function App() {
	const [city, setCity] = useState('')
	const [country, setCountry] = useState('')
	const [temperature, setTemperature] = useState('')
	const [minTemp, setMinTemp] = useState('')
	const [maxTemp, setMaxTemp] = useState('')
	const [status, setStatus] = useState('')
	const [iconId, setIconId] = useState('')
	const [error, setError] = useState(false)

	const calCelcius = (temp) => {
		let cel = Math.floor(temp - 273.15)
		return cel
	}
	const getWeather = async (e) => {
		e.preventDefault()
		const city = e.target.elements.city.value
		const country = e.target.elements.country.value
		if (city && country) {
			const weatherData = await Axios.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
			)
			const weatherReport = weatherData.data
			console.log(weatherReport)
			setCity(weatherReport.name)

			setTemperature(calCelcius(weatherReport.main.temp))
			setMinTemp(calCelcius(weatherReport.main.temp_min))
			setMaxTemp(calCelcius(weatherReport.main.temp_max))
			setStatus(weatherReport.weather[0].description)
			setIconId(weatherReport.weather[0].id)
			setCountry(weatherReport.sys.country)
		} else setError(true)
	}
	console.log(city)
	console.log(country)
	return (
		<div className="App">
			<div style={{ padding: '50px' }}>
				<Form
					loadWeather={getWeather}
					error={error}
					city={city}
					country={country}
					setError={setError}
				/>
			</div>
			<Weather
				city={city}
				country={country}
				temperature={temperature}
				minTemp={minTemp}
				maxTemp={maxTemp}
				status={status}
				iconId={iconId}
			/>
		</div>
	)
}
