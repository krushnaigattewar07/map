const cl = console.log

// const cl = console.log


var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let newCompany=[];
for (let i=0; i<companies.length; i++){
	newCompany.push(companies[i].name);
};
cl(newCompany);

let compName=[];
companies.forEach(com=>{
	compName.push(com.name);
});
cl(compName);

let companyName= companies.map((params)=>{
		return params.name;
})
cl(companyName)



var companies1 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//['companies name(1981-2003),.....]

let result=[];
for (let i=0; i<companies1.length; i++){
	result.push(`${companies1[i].name}(${companies1[i].start}-${companies1[i].end})`);
};
cl(result);

let result1=[];
companies1.forEach(comp=>{
result1.push(`${comp.name}(${comp.start}-${comp.end})`);
})
cl(result1);

let result2= companies1.map((param)=>{
	return `${param.name}(${param.start}-${param.end})`;
})
cl(result);



var companies2 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//['companies name-category,.....]


let result3=[];
for (let i=0; i<companies2.length; i++){
		result3.push(`${companies2[i].name}-${companies2[i].category}`);
}
cl(result3);

let result4=[];
companies2.forEach(comp=>{
result4.push(`${comp.name}-${comp.category}`);
});
cl(result4);

let result5= companies2.map((param)=>{
	return `${param.name}-${param.category}`;
});
cl(result5)



var companies3 = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//['company name- Company age,.....]

let result6=[];
for(let i=0; i<companies3.length; i++){
	result6.push(`${companies3[i].name} - ${companies3[i].end- companies3[i].start}`);
}
cl(result6);

let result7=[];
companies3.forEach(comp=>{
	result7.push(`${comp.name} - ${comp.end- comp.start}`);
});
cl(result7);

let result8=companies3.map((param)=>{
	return `${param.name}-${param.end - param.start}`;
})
cl(result8)