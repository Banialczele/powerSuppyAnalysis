const cables = Installation.cables.map(wires => ({ ...wires }));
const devices = Installation.devices.map(devices => ({ ...devices }));

const generateOptions = (param, select) => {
	for( let i = 0; i < param.length; i++ ) {
		const option = document.createElement('option');
		if( i === 0 ) {
			const blank = new Option('Wybierz...', '');
			select.add(blank, undefined);
		}
		option.innerHTML = param[i].type;
		option.value = param[i].type;
		select.appendChild(option);
	}
}

const select = function(param, labelClass, selectName, segmentName, selectContainer, type) {
	const selectContainerDiv = document.createElement('div');
	selectContainerDiv.className = selectContainer;
	const label = document.createElement('label');
	label.className = labelClass;
	label.setAttribute('for', selectName);
	const select = document.createElement('select');
	select.className = selectName;
	select.setAttribute('name', selectName);
	select.setAttribute('id', selectName);
	const div = document.querySelector(`.${segmentName}`);

	switch( type ) {
		case 'powerSupply' : {
			generateOptions(param, select);
			break;
		}
		case 'cable' : {
			generateOptions(cables, select);
			break;
		}

		case 'device' : {
			generateOptions(devices, select);
			break;
		}
	}

	label.appendChild(select);
	selectContainerDiv.appendChild(label);
	div.appendChild(selectContainerDiv);
}
