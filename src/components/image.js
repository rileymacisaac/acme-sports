import React from "react";

function Image(props) {
	const name = props.name.toLowerCase();
	const alt = props.alt ? props.alt : '';

	const image = props.allFiles.filter(image => image.name === name).map(filteredImg => (
			<img key={filteredImg.name} src={filteredImg.publicURL} alt={alt} draggable="false" />
	))

	return (
			image
	)
}

export default Image