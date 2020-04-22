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
	let x=prod;
	let p="product"+x;
	/*var element=document.getElementById(p);
	element.style.color="red";*/
	
	var temp = document.getElementById(p).innerHTML;
	//var t=products[x-1];

	let t='id="product'+prod+'"';
	let o='onclick="BuyProduct('+ prod +')" '; //todo swap to remove function but decide how to handle array first (id 
												//unable to sync with length so 1) reset values, 2) or just search the smallest 
												//one and use that? 2 seems most effective
	let striking='style="text-decoration:line-through;" ';
	let s='<a href="#" ' +  t + o + striking +'>' + temp +"!!" + '</a>';
	//let s=temp;//'<h2>hej</h2>';
	
	alert(" " +s);
	products[prod-1]=s;
	
	RenderProducts();
}

function AddProduct()
{
	let inputVal=document.getElementById("product").value;
	if(inputVal.length>0)
	{
		let t='id="product'+(products.length+1)+'"'; //todo: look for first empty
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