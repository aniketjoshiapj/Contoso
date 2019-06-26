var express=require('express')
var app=express();

var customerInfo=function(req,resp)
{
	var dataOfCustomersAccounts=[
		{
			acctNo:101, CustomerName:'Infosys', BranchLocation:'pune', BusinessShare:'33%', customerType:"IMP"
			
		},
		{
			acctNo:102, CustomerName:'Dassault Systemes', BranchLocation:'france', BusinessShare:'67%', customerType:"VIMP"
		},
		{
			acctNo:103, CustomerName:'KPIT', BranchLocation:'banglore', BusinessShare:'13%'	, customerType:"NIMP"																																 
		}
	];
	resp.send(dataOfCustomersAccounts)
};

app.get('/accountsInfo',customerInfo );

var server = app.listen(4000, function () {
var host = server.address().address
var port = server.address().port
console.log("WebApp app listening at http://localhost:4000", host, port)
})