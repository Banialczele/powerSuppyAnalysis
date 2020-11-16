const PowerSupplies =
[
	{type: "24V bez podtrzymania", supplyVoltage_V: 24},
	{type: "24V z podtrzymaniem", supplyVoltage_V: 21},
	{type: "48V z/bez podtrzymaniem", supplyVoltage_V: 48}
];


const Cables =
[
	{type: "2 x 1 mm2", resistivity_OhmPerMeter: 0.0181},
	{type: "2 x 1,5 mm2", resistivity_OhmPerMeter: 0.0121},
	{type: "2 x 2,5 mm2", resistivity_OhmPerMeter: 0.00741},
	{type: "2 x 4 mm2", resistivity_OhmPerMeter: 0.00461}	
];

const Devices =
[
	{type: "Teta EcoWent", power_W: 0.28, current_A: 0.005, minVoltage_V: 12, icon: "EcoWent.svg"}, // see adms://s:192.168.0.251/b:archidemes/i:165964
	{type: "Teta EcoDet", power_W: 1.15, current_A: 0.007, minVoltage_V: 12, icon: "EcoDet.svg"}, // see adms://s:192.168.0.251/b:archidemes/i:165964
	{type: "Teta EcoWent + MiniDet", power_W: 1.15, current_A: 0.007, minVoltage_V: 12, icon: "EcoWent_MiniPel.svg"}, // see adms://s:192.168.0.251/b:archidemes/i:165964
	{type: "Teta EcoTerm", power_W: 1.15, current_A: 0.007, minVoltage_V: 12, icon: "EcoTerm.svg"}, // see adms://s:192.168.0.251/b:archidemes/i:165964
	{type: "Teta EcoH", power_W: 1.52, current_A: 0.001, minVoltage_V: 12, icon: "EcoH.svg"}, // see adms://s:192.168.0.251/b:archidemes/i:226424
	{type: "Teta EcoN", power_W: 1.15, current_A: 0.007, minVoltage_V: 12, icon: "EcoN.svg"}, // see EcoTerm
	{type: "TOLED", power_W: 2.02, current_A: -0.004, minVoltage_V: 15, icon: "TOLED.svg"}, // see adms://s:192.168.0.251/b:archidemes/i:226424	
	{type: "SZOA", power_W: 2.23, current_A: -0.004, minVoltage_V: 15, icon: "SZOA.svg"},	// see adms://s:192.168.0.251/b:archidemes/i:226424
	{type: "Control V", power_W: 3.14, current_A: -0.009, minVoltage_V: 15, icon: "ControlV.svg"},	// see adms://s:192.168.0.251/b:archidemes/i:226424
];
