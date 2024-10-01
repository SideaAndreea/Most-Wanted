import React from "react";
import Moment from "react-moment";
import "./Label.css";

function Label({
	eyesColorsId,
	weight,
	height,
	dateOfBirth,
	sexId,
	place,
	nationalities,
}) {
	return (
		<div className="Label">
			<label className="labelText" htmlFor="eyesColorsId">
				{`${"Eyes color"}:`} {eyesColorsId}
			</label>
			<br />
			<label className="labelText" htmlFor="weight">
				{`${"Weight"}:`} {weight}
			</label>
			<br />
			<label className="labelText" htmlFor="height">
				{`${"Height"}:`} {height}
			</label>
			<br />
			<label className="labelText" htmlFor="dateOfBirth">
				{`${"Date of birth"}: `}
				<Moment format="DD/MM/YYYY">{dateOfBirth}</Moment>
			</label>
			<br />
			<label className="labelText" htmlFor="sexId">
				{`${"Sex"}:`} {sexId}
			</label>
			<br />
			<label className="labelText" htmlFor="place">
				{`${"Place of birth"}:`} {place}
			</label>
			<br />
			<label className="labelText" htmlFor="nationalities">
				{`${"Nationalities"}:`} {nationalities}
			</label>
		</div>
	);
}
export default Label;
