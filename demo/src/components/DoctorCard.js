// src/components/DoctorCard.js

import React from 'react';

const DoctorCard =
	(
		{
			doctor, onEdit,
			onDelete
		}
	) => {
		return (
			<div className="doctor-card">
				<p>
					{doctor.name} -
					{doctor.specialty}
				</p>
				<div className='btn-container'>
					<button onClick={
						() =>
							onEdit(doctor)
					}>
						Edit
					</button>
					<button onClick={
						() =>
							onDelete(doctor._)
					}>
						Delete
					</button>
				</div>
			</div>
		);
	};

export default DoctorCard;
