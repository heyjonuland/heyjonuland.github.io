(function() {
	var app = angular.module('ulandWebsite', []);

	app.controller('MenuController', function() {
		this.links = menuItems;
	});

	app.controller('PortfolioController', function() {
		this.items = portfolioItems;
	});

	var menuItems = [
		{
			name: "Home",
			slug: "#"
		},

		{
			name: "About",
			slug: "about"
		},

		{
			name: "Portfolio",
			slug: "portfolio"
		},

		{
			name: "Contact",
			slug: "contact"
		}
	];

	var portfolioItems = [

		{
			name: "Qualtrics",
			jobTitle: "Web Designer / Developer",
			location: "Provo, Utah",
			duration: "June 2014 - May 2015",
			slug: "Qualtrics",
			description: "..."
		},

		{
			name: "Dark Energy",
			jobTitle: "PR Director",
			location: "Provo, Utah",
			duration: "January 2013 - August 2014",
			slug: "DarkEnergy",
			description: "..."
		},

		{
			name: "The 7th Chamber",
			jobTitle: "Social Media Intern",
			location: "New York, New York",
			duration: "May 2013 - August 2013",
			slug: "SeventhChamber",
			description: "..."
		},

		{
			name: "Freehand Engineering",
			jobTitle: "Web Designer",
			location: "Burlington, Vermont",
			duration: "September 2014 - November 2014",
			slug: "Freehand",
			description: "..."
		},

		{
			name: "Aesthetly",
			jobTitle: "Co-founder",
			location: "Provo, Utah",
			duration: "August 2013 - April 2015",
			slug: "Aesthetly",
			description: "..."
		},

		{
			name: "BYU Adlab",
			jobTitle: "Team Lead",
			location: "Provo, Utah",
			duration: "August 2013 - December 2013",
			slug: "Adlab",
			description: "..."
		},

		{
			name: "Bradley Group (PRSSA)",
			jobTitle: "Chapter President",
			location: "Provo, Utah",
			duration: "January 2014 - April 2015",
			slug: "BradleyGroup",
			description: "..."
		},

		{
			name: "Bradley PR",
			jobTitle: "Account Executive",
			location: "Provo, Utah",
			duration: "April 2012 - August 2012",
			slug: "BradleyPR",
			description: "..."
		}
	];

})();