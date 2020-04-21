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
function BuyProduct(prod)
{
	alert("buy" + prod);
}

function AddProduct()
{
	let inputVal=document.getElementById("product").value;
	if(inputVal.length>0)
	{
		let t='id="product'+(products.length+1)+' "';
		
		let o='onclick="BuyProduct('+ (products.length+1) +')"'; 
		let s='<a href="#" ' +  t + o + '>' + inputVal + '</a>';
		products.push(s);
	}
	else
	{
		alert("invalid input!");
	}
	RenderProducts();
}