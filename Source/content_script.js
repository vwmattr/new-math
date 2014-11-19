walk(document.body);


function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
			
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	//I stole this function from here:
	//http://bit.ly/1v5SuoY
	var v = textNode.nodeValue;

	//Replaces 2 - infinity with "mad", like it should be.
	v = v.replace(/\d{2,}/g, "mad");
	v = v.replace(/[2-9]/g, "mad");

	textNode.nodeValue = v;
}

