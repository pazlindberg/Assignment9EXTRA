let products=[];
function RenderProducts()
{
	if(products.length<1)
	{
		document.getElementById("ProductList").innerHTML = "Empty";
	}
	
	else
	{
		document.getElementById("ProductList").innerHTML = "Produkter" + '<br />';
		for(i=0;i<products.length;i++)
		{
			document.getElementById("ProductList").innerHTML +=products[i]+'<br />';
		}
	}
}

function AddProduct()
{
	let inputVal=document.getElementById("product").value;
	if(inputVal.length>0)
	{
		let t='id="product'+(products.length+1)+'"';
		let s='<a href="#" ' +  t +  '>' + inputVal + '</a>';
		products.push(s);
	}
	else
	{
		alert("invalid input!");
	}
	RenderProducts();
}