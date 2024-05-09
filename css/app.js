
	setInterval(checkLeads, 15000); //Check for leads every 15 seconds
	function checkLeads() {
		
		//Don't forget, jquery is required for $.getJSON

		$.getJSON("https://djecvel0lck2c.cloudfront.net/public/offers/feed.php?user_id=349151&api_key=eee62bfb8844de7a250012736e3c4faa&s1=&s2=", //Hint: change to testing=1 for test leads
			function (leads) {
				var completed_leads = leads.length;
				if (completed_leads) {
					var offer_ids = [];
					var earnings_in_cents = 0;
					$.each(leads, function (key, lead) {
						offer_ids.push(parseInt(lead.offer_id));
						earnings_in_cents += parseFloat(lead.points);
						console.log("Single lead on offer id " + lead.offer_id + " for  $" + (parseFloat(lead.points) / 100).toFixed(2));
					});
					console.log("SUMMARY: User has completed " + completed_leads + " leads, for $" + (earnings_in_cents / 100) + " earnings, on offer ids: " + offer_ids.join(","));
				}
				else {
					console.log("No leads were found");
				}
			});
	}
