function getRubric(name, num) {
	return {
		'class': [
			'rubric',
			'published',
			'analytic',
			'numeric'
		],
		'properties': {
			'name': name,
			'outOf': 12.000000000
		},
		'entities': [
			{
				'class': [
					'richtext',
					'description'
				],
				'rel': [
					'item'
				],
				'properties': {
					'text': 'ert',
					'html': '<p>ert</p>'
				},
				'actions': [
					{
						'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}`,
						'name': 'update-description',
						'method': 'PATCH',
						'fields': [
							{
								'type': 'text',
								'name': 'description',
								'value': '<p>ert</p>'
							}
						]
					}
				]
			},
			{
				'class': [
					'richtext-editor-config'
				],
				'rel': [
					'https://api.brightspace.com/rels/richtext-editor-config'
				],
				'properties': {
					'orgUnit': {
						'OrgId': '6606',
						'OrgUnitId': '123060'
					},
					'd2l_filter': {
						'endpoint': '/d2l/lp/htmleditor/converttoabsolute?ou=123060'
					},
					'd2l_isf': {
						'endpoint': '/d2l/common/dialogs/isf/selectItem.d2l?ou=123060&filterMode=Strict'
					}
				}
			},
			{
				'class': [
					'associations'
				],
				'rel': [
					'help'
				],
				'properties': {
					'titleLangTerm': 'Rubrics.Shared:Help.hlpAssociationsTitle',
					'descriptionLangTerm': 'Rubrics.Shared:Help.hlpAssociationsDescription'
				}
			},
			{
				'class': [
					'collection',
					'associations'
				],
				'rel': [
					'https://rubrics.api.brightspace.com/rels/allowed-associations'
				],
				'entities': [
					{
						'class': [
							'association'
						],
						'rel': [
							'item'
						],
						'title': 'Competencies',
						'properties': {
							'allowed': true
						},
						'actions': [
							{
								'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/allowedAssociations/Competency`,
								'name': 'update',
								'method': 'PUT',
								'fields': [
									{
										'type': 'checkbox',
										'name': 'allowed',
										'value': true
									}
								]
							}
						],
						'links': [
							{
								'rel': [
									'self'
								],
								'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/allowedAssociations/Competency`
							}
						]
					},
					{
						'class': [
							'association'
						],
						'rel': [
							'item'
						],
						'title': 'ePortfolio',
						'properties': {
							'allowed': true
						},
						'actions': [
							{
								'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/allowedAssociations/ePortfolio`,
								'name': 'update',
								'method': 'PUT',
								'fields': [
									{
										'type': 'checkbox',
										'name': 'allowed',
										'value': true
									}
								]
							}
						],
						'links': [
							{
								'rel': [
									'self'
								],
								'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/allowedAssociations/ePortfolio`
							}
						]
					}
				]
			}
		],
		'links': [
			{
				'rel': [
					'self'
				],
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}`
			},
			{
				'rel': [
					'up'
				],
				'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060'
			},
			{
				'class': [
					'statistics'
				],
				'rel': [
					'alternate'
				],
				'href': `https://59abbaec.eu.ngrok.io/d2l/lp/rubrics/stats_selectAssociation.d2l?rubricId=${num}&ou=123060`
			},
			{
				'class': [
					'preview'
				],
				'rel': [
					'alternate'
				],
				'href': `https://59abbaec.eu.ngrok.io/d2l/lp/rubrics/preview.d2l?rubricId=${num}&originTool=rubrics&ou=123060`
			},
			{
				'class': [
					'rubric-associations'
				],
				'rel': [
					'https://rubrics.api.brightspace.com/rels/associations'
				],
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/associations`
			},
			{
				'rel': [
					'https://rubrics.api.brightspace.com/rels/criteria-groups'
				],
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/groups`
			},
			{
				'rel': [
					'https://api.brightspace.com/rels/organization'
				],
				'href': 'https://99d6c88f-3f9e-45e6-b804-988b1f68e463.organizations.api.dev.brightspace.com/123060'
			},
			{
				'rel': [
					'https://rubrics.api.brightspace.com/rels/overall-levels'
				],
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/overallLevels`
			}
		],
		'actions': [
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/reverseLevels`,
				'name': 'reverse-levels',
				'method': 'POST'
			},
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/updateScoring`,
				'name': 'update-scoring',
				'method': 'POST',
				'fields': [
					{
						'type': 'radio',
						'name': 'scoring-method',
						'value': [
							{
								'value': 'TextOnly',
								'title': 'No Score',
								'selected': false
							},
							{
								'value': 'Points',
								'title': 'Points',
								'selected': true
							},
							{
								'value': 'CustomPoints',
								'title': 'Custom Points',
								'selected': false
							}
						]
					}
				]
			},
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}/convertType`,
				'name': 'update-type',
				'method': 'POST',
				'fields': [
					{
						'type': 'radio',
						'name': 'rubric-type',
						'value': [
							{
								'value': 'Holistic',
								'title': 'Holistic',
								'selected': false
							},
							{
								'value': 'Analytic',
								'title': 'Analytic',
								'selected': true
							}
						]
					}
				]
			},
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}`,
				'name': 'update-name',
				'method': 'PATCH',
				'fields': [
					{
						'class': [
							'required'
						],
						'type': 'text',
						'name': 'name',
						'value': 'ert'
					}
				]
			},
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}`,
				'name': 'update-visibility',
				'method': 'PATCH',
				'fields': [
					{
						'type': 'radio',
						'name': 'visibility',
						'value': [
							{
								'value': 'AlwaysVisible',
								'selected': true
							},
							{
								'value': 'VisibleOnceFeedbackPosted',
								'selected': false
							},
							{
								'value': 'NeverVisible',
								'selected': false
							}
						]
					}
				]
			},
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}`,
				'name': 'update-score-visibility',
				'method': 'PATCH',
				'fields': [
					{
						'type': 'checkbox',
						'name': 'scoreVisible',
						'value': true
					}
				]
			},
			{
				'href': `https://99d6c88f-3f9e-45e6-b804-988b1f68e463.rubrics.api.dev.brightspace.com/organizations/123060/${num}`,
				'name': 'update-status',
				'method': 'PATCH',
				'fields': [
					{
						'type': 'radio',
						'name': 'rubric-status',
						'value': [
							{
								'value': 'Published',
								'title': 'Published',
								'selected': true
							},
							{
								'value': 'Archived',
								'title': 'Archived',
								'selected': false
							},
							{
								'value': 'Draft',
								'title': 'Draft',
								'selected': false
							}
						]
					}
				]
			}
		]
	};
}

window.rubric1 = getRubric('RUBRIC 0', 13);
window.rubric2 = getRubric('RUBRIC 1', 14);
window.rubric3 = getRubric('RUBRIC 2', 15);
