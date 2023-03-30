function convert()
{
	form=document.getElementById('temp');
	input=form.elements[0].value;
	inputoption=form.elements[1].value;
	outputoption=form.elements[3].value;
	if(inputoption=="C"&&outputoption=="F")
	{
		result=(input*9/5)+32;
	}
	else if(inputoption=="F"&& outputoption=="C")
	{
		result=(input-32)*5/9;
	}
	else if(inputoption=="C"&& outputoption=="K")
	{
		result=input+273;
	}
	else if(inputoption=="K"&& outputoption=="C")
	{
		result=input-273;
	}
	else
	{
			result=input;
	}
	form.elements[2].value=result;
}