module.exports = {
  home: context => {
    return {
	"type": "home",
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Welcome!* \nThis is a home for product sales forecasting. Click the button to start a new forecast!"
			},
		},
		{
			"type": "divider"
		},
            {
          type: "actions",
          elements: [
            {
              action_id: "open_modal",
              type: "button",
              text: {
                type: "plain_text",
                text: "New Forecast"
              }
            }
          ]
        }
	]
};
  },
  modal: context => {
    return {
	"type": "modal",
  "callback_id": "forecast-modal-identifier",
	"title": {
		"type": "plain_text",
		"text": "Sales Forecasting",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "input",
			"element": {
				"type": "static_select",
        "action_id": "text1234",
				"placeholder": {
					"type": "plain_text",
					"text": "Brand",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "JustFab",
							"emoji": true
						},
						"value": "jf"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "ShoeDazzle",
							"emoji": true
						},
						"value": "sd"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "FabKids",
							"emoji": true
						},
						"value": "fk"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Savage X",
							"emoji": true
						},
						"value": "sx"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Fabletics",
							"emoji": true
						},
						"value": "fl"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Choose Brand",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Country",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "United States",
							"emoji": true
						},
						"value": "us"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Canada",
							"emoji": true
						},
						"value": "ca"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Netherlands",
							"emoji": true
						},
						"value": "nl"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Denmark",
							"emoji": true
						},
						"value": "dk"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Sweden",
							"emoji": true
						},
						"value": "se"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Spain",
							"emoji": true
						},
						"value": "es"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "France",
							"emoji": true
						},
						"value": "fr"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "United Kingdom",
							"emoji": true
						},
						"value": "uk"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Germany",
							"emoji": true
						},
						"value": "de"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Choose Country",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"placeholder": {
					"type": "plain_text",
					"text": "Example: BS1827628-0001",
					"emoji": true
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Input Product SKU",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "datepicker",
				"initial_date": "2020-10-01",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date",
					"emoji": true
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Choose Forecast Start Date",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "datepicker",
				"initial_date": "2020-11-01",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date",
					"emoji": true
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Choose Forecast End Date",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"placeholder": {
					"type": "plain_text",
					"text": "From 0.0 to 1.0 (Example: 0.8)",
					"emoji": true
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Input Sell Through Percent",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Output Graph",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Daily Grain",
							"emoji": true
						},
						"value": "daily"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Weekly Grain",
							"emoji": true
						},
						"value": "weekly"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Monthly Grain",
							"emoji": true
						},
						"value": "monthly"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Output Graph",
				"emoji": true
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "The forecast output will be sent to channel `merch-forecasting`"
				}
			]
		}
	]
}
  }
};
