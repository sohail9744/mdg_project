/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EHS/ManageAssessmentTemplates/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});