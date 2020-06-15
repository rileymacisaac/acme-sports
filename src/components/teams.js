import React, { Component } from 'react'
import Image from "../components/image"

class AllTeams extends Component {
	constructor(props) {
		super(props)
		const teams = props.allData.allInternalTeams.nodes;
		const images = props.allData.allFile.nodes;

		let allConferences = teams.filter(team => team.conference).map(t => (t.conference));
		allConferences = [...new Set(allConferences)];

		let allDivisions = teams.filter(team => team.division).map(t => (t.division));
		allDivisions = [...new Set(allDivisions)];

		this.state = {
			teams: teams,
			filteredTeams: teams,
			images: images,
			divisions: allDivisions,
			conferences: allConferences
		};
	}

	// Sort teams
	sortTeams = (e) => {
		e.preventDefault();

		const { target } = e;
		const conference = target.querySelector('select[name="conf"]').value.toLowerCase();
		const division = target.querySelector('select[name="div"]').value.toLowerCase();
		const ascDesc = target.querySelector('.filters__item input[type="radio"]:checked').getAttribute('data-filter');

		let teams = this.state.teams;

		if (conference !== 'all') { // Conference
			teams = teams.filter(team => team.conference.toLowerCase() === conference);
		}

		if (division !== 'all') { // Division
			teams = teams.filter(team => team.division.toLowerCase() === division);
		}

		if (ascDesc === 'asc') { // ASC
			teams.sort((a, b) => {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});
		} else { // DESC
			teams.sort((a, b) => {
				if (a.name < b.name) return 1;
				if (a.name > b.name) return -1;
				return 0;
			});
		}

		this.setState({
			filteredTeams: teams,
		});
	}

	render() {
		var list = '';

		if (this.state.filteredTeams && this.state.filteredTeams.length) {
			const listItems = this.state.filteredTeams.map((team) =>
				<li className="teams__item" key={team.alternative_id}>
					<div className="teams__item-container box flow-vertical">
						<div className="teams__content">
							<h3 className="teams__heading"><span>{team.name} </span>{team.nickname}</h3>
							<p className="teams__description color-gray">{team.conference} <small>{team.division} Division</small></p>
						</div>

						<div className="teams__logo">
							<picture>
								<Image allFiles={this.state.images} name={team.nickname}/>
							</picture>
						</div>
					</div>
				</li>
			);

			list = <ul className="teams__list flow-vertical">{listItems}</ul>;
		} else {
			list = <p>Interesting, there seems to be no teams in the NFL currently.</p>
		}

		return (
			<div>
				{!!(this.state.conferences.length || this.state.divisions.length) &&
				<>
				<form action="" onSubmit={((e) => this.sortTeams(e))} className="filters flow-vertical">
					{!!(this.state.conferences.length) &&

					<div className="filters__item">
						<label htmlFor="conf">Conference</label>
						<div className="input-select">
							<select name="conf" id="conf" className="box">
								<option value="all">All Conferences</option>
								{this.state.conferences.map((conference, key) =>
									<option key={key} value={conference}>{conference}</option>
								)}
							</select>
						</div>
					</div>

					}
					{!!(this.state.divisions.length) &&

					<div className="filters__item">
						<label htmlFor="div">Division</label>
						<div className="input-select">
							<select name="div" id="div" className="box">
								<option value="all">All Divisions</option>
								{this.state.divisions.map((division, key) =>
									<option key={key} value={division}>{division} Division</option>
								)}
							</select>
						</div>
					</div>
					// Using role="group" and aria-labelledby below to avoid flex issues with fieldsets on chrome
					}
					<div role="group" className="filters__item filters__item--align-center" aria-labelledby="ascDesc-legend">
						<span id="ascDesc-legend" className="legend">Team <abbr title="Ascending">Asc</abbr>/<abbr title="Descending">Desc</abbr></span>

						<label className="input-radio">
							<input type="radio" name="team-alphabetical" data-filter="asc" defaultChecked="true"/>
							<span className="input-radio__circle"></span>
							Asc
						</label>
						<label className="input-radio">
							<input type="radio" name="team-alphabetical" data-filter="desc"/>
							<span className="input-radio__circle"></span>
							Desc
						</label>
					</div>

					<div className="filters__item filters__item--align-center">
						<button type="submit" className="link">Filter Teams</button>
					</div>
				</form>
				</>
				}

				{list}
			</div>
		);
	}
}

export default AllTeams