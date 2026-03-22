/* ============================ Science Calculations ============================ */

function physicsKinematics() {
    const u = parseFloat(prompt("Initial velocity (m/s):"));
    const v = parseFloat(prompt("Final velocity (m/s):"));
    const t = parseFloat(prompt("Time (s):"));
    const a = (v-u)/t;
    alert(`Acceleration: ${a.toFixed(2)} m/s²`);
    saveHistory("science", `Physics: Acceleration from u=${u}, v=${v}, t=${t}`, `${a.toFixed(2)} m/s²`);
}

function physicsForce() {
    const m = parseFloat(prompt("Mass (kg):"));
    const a = parseFloat(prompt("Acceleration (m/s²):"));
    const F = m*a;
    alert(`Force: ${F.toFixed(2)} N`);
    saveHistory("science", `Physics: Force with m=${m}, a=${a}`, `${F.toFixed(2)} N`);
}

function chemistryMolarity() {
    const moles = parseFloat(prompt("Moles of solute:"));
    const volume = parseFloat(prompt("Volume of solution (L):"));
    const M = moles/volume;
    alert(`Molarity: ${M.toFixed(2)} M`);
    saveHistory("science", `Chemistry: Molarity with moles=${moles}, volume=${volume}`, `${M.toFixed(2)} M`);
}

function chemistrypH() {
    const H = parseFloat(prompt("Concentration of H⁺ (mol/L):"));
    const pH = -Math.log10(H);
    alert(`pH: ${pH.toFixed(2)}`);
    saveHistory("science", `Chemistry: pH with [H⁺]=${H}`, `${pH.toFixed(2)}`);
}

function biologyBMI() {
    const weight = parseFloat(prompt("Weight (kg):"));
    const height = parseFloat(prompt("Height (m):"));
    const bmi = weight/(height*height);
    alert(`BMI: ${bmi.toFixed(2)}`);
    saveHistory("science", `Biology: BMI with weight=${weight}, height=${height}`, `${bmi.toFixed(2)}`);
}

function mathQuadratic() {
    const a = parseFloat(prompt("a:"));
    const b = parseFloat(prompt("b:"));
    const c = parseFloat(prompt("c:"));
    const delta = b*b - 4*a*c;
    if(delta <0){ alert("No Real Roots"); return; }
    const root1 = (-b + Math.sqrt(delta))/(2*a);
    const root2 = (-b - Math.sqrt(delta))/(2*a);
    alert(`Roots: ${root1.toFixed(2)}, ${root2.toFixed(2)}`);
    saveHistory("science", `Math: Quadratic roots a=${a},b=${b},c=${c}`, `Roots: ${root1.toFixed(2)}, ${root2.toFixed(2)}`);
}

/* Placeholder Loop to generate 50+ Science calculation functions */
const sciencePlaceholders = [];
for(let i=1;i<=50;i++){
    sciencePlaceholders.push(function(){
        const res = `Placeholder Science Calc #${i}`;
        console.log(res);
        saveHistory("science", res, "Result Placeholder");
    });
}

/* ============================ Science Graphs ============================ */
function generateScienceGraph() {
    const ctx = document.getElementById("graphCanvas").getContext("2d");
    const data = {
        labels: ["Experiment 1","Experiment 2","Experiment 3","Experiment 4","Experiment 5"],
        datasets: [{
            label: "Science Data",
            data: [Math.random()*10,Math.random()*15,Math.random()*12,Math.random()*8,Math.random()*20],
            borderColor: "#00ff90",
            backgroundColor: "rgba(0,255,144,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart = new Chart(ctx,{type:"bar",data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#e0e0e0"}}},scales:{x:{ticks:{color:"#e0e0e0"}},y:{ticks:{color:"#e0e0e0"}}}}});
    saveHistory("science","Generated Science Graph","See Chart");
}

/* ============================ Export / Import ============================ */
function exportScienceJSON() {
    const data = addBranding(JSON.stringify(historyData.science,null,2));
    downloadFile("science_history.json",data);
}
function exportScienceCSV() {
    let csv = "Calculation,Result,Timestamp\n";
    historyData.science.forEach(item=>{
        csv += `"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("science_history.csv",addBranding(csv));
}
/* ============================ Commerce Calculations ============================ */

function calcProfitLoss() {
    const cost = parseFloat(prompt("Cost Price (₹):"));
    const selling = parseFloat(prompt("Selling Price (₹):"));
    const profit = selling - cost;
    const profitPerc = (profit/cost)*100;
    alert(`Profit/Loss: ₹${profit.toFixed(2)} (${profitPerc.toFixed(2)}%)`);
    saveHistory("commerce", `Profit/Loss: cost=${cost}, selling=${selling}`, `₹${profit.toFixed(2)} (${profitPerc.toFixed(2)}%)`);
}

function calcEMI() {
    const P = parseFloat(prompt("Principal (₹):"));
    const R = parseFloat(prompt("Annual Interest Rate (%)"))/12/100;
    const N = parseFloat(prompt("Tenure (months):"));
    const emi = P*R*(Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
    alert(`EMI: ₹${emi.toFixed(2)}`);
    saveHistory("commerce", `EMI Calculation P=${P}, R=${R*12*100}, N=${N}`, `₹${emi.toFixed(2)}`);
}

function calcGST() {
    const amount = parseFloat(prompt("Amount (₹):"));
    const gstRate = parseFloat(prompt("GST Rate (%)"));
    const gstAmt = amount*gstRate/100;
    const total = amount+gstAmt;
    alert(`GST: ₹${gstAmt.toFixed(2)}, Total: ₹${total.toFixed(2)}`);
    saveHistory("commerce", `GST Calculation amount=${amount}, rate=${gstRate}`, `GST=₹${gstAmt.toFixed(2)}, Total=₹${total.toFixed(2)}`);
}

function calcCompoundInterest() {
    const P = parseFloat(prompt("Principal (₹):"));
    const R = parseFloat(prompt("Annual Interest Rate (%)"));
    const T = parseFloat(prompt("Time (years):"));
    const n = parseFloat(prompt("Compounding per year:"));
    const A = P * Math.pow(1 + (R/100)/n, n*T);
    const CI = A-P;
    alert(`Compound Interest: ₹${CI.toFixed(2)}, Total Amount: ₹${A.toFixed(2)}`);
    saveHistory("commerce", `Compound Interest P=${P}, R=${R}, T=${T}, n=${n}`, `CI=₹${CI.toFixed(2)}, Total=₹${A.toFixed(2)}`);
}

function calcTDS() {
    const income = parseFloat(prompt("Income (₹):"));
    const tdsRate = parseFloat(prompt("TDS Rate (%)"));
    const tds = income * tdsRate/100;
    alert(`TDS: ₹${tds.toFixed(2)}`);
    saveHistory("commerce", `TDS Calculation income=${income}, rate=${tdsRate}`, `₹${tds.toFixed(2)}`);
}

function calcROI() {
    const gain = parseFloat(prompt("Gain (₹):"));
    const cost = parseFloat(prompt("Cost (₹):"));
    const roi = ((gain - cost)/cost)*100;
    alert(`ROI: ${roi.toFixed(2)}%`);
    saveHistory("commerce", `ROI Calculation gain=${gain}, cost=${cost}`, `${roi.toFixed(2)}%`);
}

/* Placeholder for 50+ Commerce calculations */
const commercePlaceholders = [];
for(let i=1;i<=50;i++){
    commercePlaceholders.push(function(){
        const res = `Placeholder Commerce Calc #${i}`;
        console.log(res);
        saveHistory("commerce", res, "Result Placeholder");
    });
}

/* ============================ Commerce Graphs ============================ */
function generateCommerceGraph() {
    const ctx = document.getElementById("graphCanvas").getContext("2d");
    const data = {
        labels: ["Jan","Feb","Mar","Apr","May"],
        datasets: [{
            label: "Finance Metrics",
            data: [Math.random()*5000, Math.random()*8000, Math.random()*6000, Math.random()*7000, Math.random()*9000],
            borderColor: "#ff9900",
            backgroundColor: "rgba(255,153,0,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart = new Chart(ctx,{type:"line",data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#e0e0e0"}}},scales:{x:{ticks:{color:"#e0e0e0"}},y:{ticks:{color:"#e0e0e0"}}}}});
    saveHistory("commerce","Generated Commerce Graph","See Chart");
}

/* ============================ Export / Import ============================ */
function exportCommerceJSON() {
    const data = addBranding(JSON.stringify(historyData.commerce,null,2));
    downloadFile("commerce_history.json",data);
}
function exportCommerceCSV() {
    let csv = "Calculation,Result,Timestamp\n";
    historyData.commerce.forEach(item=>{
        csv += `"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("commerce_history.csv",addBranding(csv));
}
/* ============================ Tech / Coding Calculations ============================ */

function decimalToBinary() {
    const num = parseInt(prompt("Enter Decimal Number:"));
    const bin = num.toString(2);
    alert(`Binary: ${bin}`);
    saveHistory("tech", `Decimal to Binary: ${num}`, bin);
}

function decimalToHex() {
    const num = parseInt(prompt("Enter Decimal Number:"));
    const hex = num.toString(16).toUpperCase();
    alert(`Hexadecimal: ${hex}`);
    saveHistory("tech", `Decimal to Hex: ${num}`, hex);
}

function binaryToDecimal() {
    const bin = prompt("Enter Binary Number:");
    const dec = parseInt(bin,2);
    alert(`Decimal: ${dec}`);
    saveHistory("tech", `Binary to Decimal: ${bin}`, dec);
}

function factorialCalc() {
    const n = parseInt(prompt("Enter Number for Factorial:"));
    let res = 1;
    for(let i=2;i<=n;i++) res*=i;
    alert(`Factorial(${n}) = ${res}`);
    saveHistory("tech", `Factorial of ${n}`, res);
}

function gcdCalc() {
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));
    while(b!==0){ let t=b; b=a%b; a=t; }
    alert(`GCD: ${a}`);
    saveHistory("tech", `GCD Calculation: ${a}`, a);
}

function lcmCalc() {
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));
    const gcd=(x,y)=>y?gcd(y,x%y):x;
    const lcm=(a*b)/gcd(a,b);
    alert(`LCM: ${lcm}`);
    saveHistory("tech", `LCM Calculation: ${a}, ${b}`, lcm);
}

function primeCheck() {
    const n = parseInt(prompt("Enter Number to Check Prime:"));
    let isPrime=true;
    if(n<2) isPrime=false;
    for(let i=2;i<=Math.sqrt(n);i++){ if(n%i===0){ isPrime=false; break; } }
    alert(`${n} is ${isPrime?"Prime":"Not Prime"}`);
    saveHistory("tech", `Prime Check: ${n}`, isPrime?"Prime":"Not Prime");
}

function fibonacciSeries() {
    const n = parseInt(prompt("Number of terms:"));
    const series=[0,1];
    for(let i=2;i<n;i++) series.push(series[i-1]+series[i-2]);
    alert(`Fibonacci Series: ${series.slice(0,n).join(", ")}`);
    saveHistory("tech", `Fibonacci series for n=${n}`, series.slice(0,n).join(", "));
}

/* Placeholder for 50+ Tech / Coding calculations */
const techPlaceholders = [];
for(let i=1;i<=50;i++){
    techPlaceholders.push(function(){
        const res = `Placeholder Tech/Coding Calc #${i}`;
        console.log(res);
        saveHistory("tech", res, "Result Placeholder");
    });
}

/* ============================ Tech Graphs ============================ */
function generateTechGraph() {
    const ctx = document.getElementById("graphCanvas").getContext("2d");
    const data = {
        labels:["Op1","Op2","Op3","Op4","Op5"],
        datasets:[{
            label:"Execution Time (ms)",
            data:[Math.random()*100,Math.random()*200,Math.random()*150,Math.random()*300,Math.random()*250],
            borderColor:"#00ffcc",
            backgroundColor:"rgba(0,255,204,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:"bar",data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#e0e0e0"}}},scales:{x:{ticks:{color:"#e0e0e0"}},y:{ticks:{color:"#e0e0e0"}}}}});
    saveHistory("tech","Generated Tech/Coding Graph","See Chart");
}

/* ============================ Export / Import ============================ */
function exportTechJSON() {
    const data = addBranding(JSON.stringify(historyData.tech,null,2));
    downloadFile("tech_history.json",data);
}

function exportTechCSV() {
    let csv = "Calculation,Result,Timestamp\n";
    historyData.tech.forEach(item=>{
        csv += `"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("tech_history.csv",addBranding(csv));
}
/* ============================ Science Calculations ============================ */

/* ----- Physics ----- */
function calculateForce(){
    const m=parseFloat(prompt("Enter Mass (kg):"));
    const a=parseFloat(prompt("Enter Acceleration (m/s²):"));
    const F=m*a;
    alert(`Force = ${F} N`);
    saveHistory("science", `Force Calculation: Mass=${m}kg, Acc=${a}m/s²`, `${F} N`);
}

function calculateWork(){
    const F=parseFloat(prompt("Enter Force (N):"));
    const d=parseFloat(prompt("Enter Distance (m):"));
    const W=F*d;
    alert(`Work = ${W} Joules`);
    saveHistory("science", `Work Calculation: Force=${F}N, Distance=${d}m`, `${W} J`);
}

function calculatePower(){
    const W=parseFloat(prompt("Enter Work (J):"));
    const t=parseFloat(prompt("Enter Time (s):"));
    const P=W/t;
    alert(`Power = ${P} Watts`);
    saveHistory("science", `Power Calculation: Work=${W}J, Time=${t}s`, `${P} W`);
}

function calculatePressure(){
    const F=parseFloat(prompt("Force (N):"));
    const A=parseFloat(prompt("Area (m²):"));
    const P=F/A;
    alert(`Pressure = ${P} Pa`);
    saveHistory("science", `Pressure: Force=${F}N, Area=${A}m²`, `${P} Pa`);
}

function velocityCalculation(){
    const s=parseFloat(prompt("Distance (m):"));
    const t=parseFloat(prompt("Time (s):"));
    const v=s/t;
    alert(`Velocity = ${v} m/s`);
    saveHistory("science", `Velocity: Distance=${s}m, Time=${t}s`, `${v} m/s`);
}

/* ----- Chemistry ----- */
function molCalculation(){
    const m=parseFloat(prompt("Enter mass (g):"));
    const M=parseFloat(prompt("Enter molar mass (g/mol):"));
    const n=m/M;
    alert(`Moles = ${n} mol`);
    saveHistory("science", `Moles: mass=${m}g, molar mass=${M}g/mol`, `${n} mol`);
}

function molarityCalculation(){
    const n=parseFloat(prompt("Number of moles:"));
    const V=parseFloat(prompt("Volume in L:"));
    const M=n/V;
    alert(`Molarity = ${M} M`);
    saveHistory("science", `Molarity: n=${n} mol, V=${V} L`, `${M} M`);
}

function phCalculation(){
    const H=parseFloat(prompt("Enter [H+] in mol/L:"));
    const pH=-Math.log10(H);
    alert(`pH = ${pH}`);
    saveHistory("science", `pH Calculation: [H+]=${H}`, pH);
}

function gasLawPVnRT(){
    const P=parseFloat(prompt("Pressure (Pa):"));
    const V=parseFloat(prompt("Volume (m³):"));
    const n=parseFloat(prompt("Moles:"));
    const R=8.314; // J/mol.K
    const T=(P*V)/(n*R);
    alert(`Temperature T = ${T} K`);
    saveHistory("science", `Ideal Gas: P=${P}Pa, V=${V}m³, n=${n}mol`, `${T} K`);
}

/* ----- Biology ----- */
function calculateBMI(){
    const h=parseFloat(prompt("Enter Height (m):"));
    const w=parseFloat(prompt("Enter Weight (kg):"));
    const bmi=w/(h*h);
    alert(`BMI = ${bmi}`);
    saveHistory("science", `BMI: Height=${h}m, Weight=${w}kg`, bmi);
}

function bodyFatPercentage(){
    const bmi=parseFloat(prompt("Enter BMI:"));
    const age=parseInt(prompt("Enter Age:"));
    const gender=prompt("Enter Gender (M/F):").toUpperCase();
    let bfp=(1.2*bmi)+(0.23*age)-5.4;
    if(gender==='F') bfp+=10.8;
    alert(`Body Fat % = ${bfp.toFixed(2)}%`);
    saveHistory("science", `Body Fat: BMI=${bmi}, Age=${age}, Gender=${gender}`, `${bfp.toFixed(2)} %`);
}

/* ----- Mathematics / Statistics ----- */
function meanCalc(){
    const arr=prompt("Enter numbers separated by comma").split(",").map(Number);
    const mean=arr.reduce((a,b)=>a+b,0)/arr.length;
    alert(`Mean = ${mean}`);
    saveHistory("science", `Mean: [${arr.join(",")}]`, mean);
}

function standardDeviation(){
    const arr=prompt("Enter numbers separated by comma").split(",").map(Number);
    const mean=arr.reduce((a,b)=>a+b,0)/arr.length;
    const sd=Math.sqrt(arr.reduce((a,b)=>a+Math.pow(b-mean,2),0)/arr.length);
    alert(`Standard Deviation = ${sd}`);
    saveHistory("science", `Std Dev: [${arr.join(",")}]`, sd);
}

/* Placeholder for 50+ Science Calculations */
const sciencePlaceholders=[];
for(let i=1;i<=50;i++){
    sciencePlaceholders.push(function(){
        const res=`Placeholder Science Calc #${i}`;
        console.log(res);
        saveHistory("science", res,"Result Placeholder");
    });
}

/* ============================ Science Graphs ============================ */
function generateScienceGraph(){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={
        labels:["Experiment1","Experiment2","Experiment3","Experiment4","Experiment5"],
        datasets:[{
            label:"Results",
            data:[Math.random()*100,Math.random()*80,Math.random()*120,Math.random()*60,Math.random()*150],
            borderColor:"#ff6600",
            backgroundColor:"rgba(255,102,0,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:"line",data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#e0e0e0"}}},scales:{x:{ticks:{color:"#e0e0e0"}},y:{ticks:{color:"#e0e0e0"}}}}});
    saveHistory("science","Generated Science Graph","See Chart");
}

/* ============================ Export / Import ============================ */
function exportScienceJSON(){
    const data=addBranding(JSON.stringify(historyData.science,null,2));
    downloadFile("science_history.json",data);
}

function exportScienceCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.science.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("science_history.csv",addBranding(csv));
}
/* ============================ Commerce Calculations ============================ */

/* ----- Finance ----- */
function simpleInterest(){
    const P=parseFloat(prompt("Principal Amount:"));
    const R=parseFloat(prompt("Rate of Interest (% per annum):"));
    const T=parseFloat(prompt("Time (years):"));
    const SI=(P*R*T)/100;
    alert(`Simple Interest = ${SI}`);
    saveHistory("commerce", `Simple Interest: P=${P}, R=${R}%, T=${T} years`, SI);
}

function compoundInterest(){
    const P=parseFloat(prompt("Principal Amount:"));
    const R=parseFloat(prompt("Rate of Interest (% per annum):"));
    const T=parseFloat(prompt("Time (years):"));
    const n=parseFloat(prompt("Compounding frequency per year:"));
    const A=P*Math.pow((1+R/(100*n)), n*T);
    const CI=A-P;
    alert(`Compound Interest = ${CI.toFixed(2)}`);
    saveHistory("commerce", `Compound Interest: P=${P}, R=${R}%, T=${T}, n=${n}`, CI.toFixed(2));
}

function emiCalculator(){
    const P=parseFloat(prompt("Loan Amount:"));
    const R=parseFloat(prompt("Rate of Interest (per annum %):"))/1200;
    const N=parseInt(prompt("Number of Months:"));
    const EMI=(P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
    alert(`EMI = ${EMI.toFixed(2)}`);
    saveHistory("commerce", `EMI: P=${P}, R=${R*1200}%, N=${N} months`, EMI.toFixed(2));
}

function depreciationSLM(){
    const cost=parseFloat(prompt("Cost of Asset:"));
    const salvage=parseFloat(prompt("Salvage Value:"));
    const life=parseFloat(prompt("Useful Life (years):"));
    const dep=(cost-salvage)/life;
    alert(`Depreciation (SLM) = ${dep.toFixed(2)} per year`);
    saveHistory("commerce", `Depreciation SLM: Cost=${cost}, Salvage=${salvage}, Life=${life}`, dep.toFixed(2));
}

/* ----- Accounting ----- */
function profitLoss(){
    const CP=parseFloat(prompt("Cost Price:"));
    const SP=parseFloat(prompt("Selling Price:"));
    const result=SP-CP;
    let msg=result>=0?`Profit = ${result}`:`Loss = ${Math.abs(result)}`;
    alert(msg);
    saveHistory("commerce", `Profit/Loss: CP=${CP}, SP=${SP}`, msg);
}

function markupMarkdown(){
    const cost=parseFloat(prompt("Cost Price:"));
    const percent=parseFloat(prompt("Percentage:"));
    const type=prompt("Type: Markup or Markdown").toLowerCase();
    const final=type==="markup"?cost*(1+percent/100):cost*(1-percent/100);
    alert(`Final Price = ${final.toFixed(2)}`);
    saveHistory("commerce", `${type} Calculation: Cost=${cost}, %=${percent}`, final.toFixed(2));
}

/* ----- Tax & GST ----- */
function gstCalculator(){
    const amount=parseFloat(prompt("Enter Amount:"));
    const rate=parseFloat(prompt("GST Rate %:"));
    const gst=amount*rate/100;
    const total=amount+gst;
    alert(`GST = ${gst}, Total Amount = ${total}`);
    saveHistory("commerce", `GST: Amount=${amount}, Rate=${rate}%`, `GST=${gst}, Total=${total}`);
}

function tdsCalculator(){
    const income=parseFloat(prompt("Income Amount:"));
    const rate=parseFloat(prompt("TDS Rate %:"));
    const tds=(income*rate)/100;
    alert(`TDS Deducted = ${tds}`);
    saveHistory("commerce", `TDS: Income=${income}, Rate=${rate}%`, tds);
}

function tcsCalculator(){
    const sale=parseFloat(prompt("Sale Amount:"));
    const rate=parseFloat(prompt("TCS Rate %:"));
    const tcs=(sale*rate)/100;
    alert(`TCS Collected = ${tcs}`);
    saveHistory("commerce", `TCS: Sale=${sale}, Rate=${rate}%`, tcs);
}

/* ----- Investment ----- */
function cagrCalculator(){
    const Vb=parseFloat(prompt("Beginning Value:"));
    const Ve=parseFloat(prompt("Ending Value:"));
    const n=parseFloat(prompt("Number of Years:"));
    const cagr=Math.pow(Ve/Vb,1/n)-1;
    alert(`CAGR = ${(cagr*100).toFixed(2)} %`);
    saveHistory("commerce", `CAGR: Vb=${Vb}, Ve=${Ve}, n=${n}`, `${(cagr*100).toFixed(2)} %`);
}

function sipReturns(){
    const P=parseFloat(prompt("Monthly SIP Amount:"));
    const r=parseFloat(prompt("Expected Annual Return %"))/100;
    const n=parseInt(prompt("Number of Months:"));
    const fv=P*((Math.pow(1+r/12,n)-1)/(r/12))*(1+r/12);
    alert(`Future Value of SIP = ${fv.toFixed(2)}`);
    saveHistory("commerce", `SIP: P=${P}, r=${r*100}%, n=${n}`, fv.toFixed(2));
}

/* ----- Placeholder 50+ Commerce Calculations ----- */
const commercePlaceholders=[];
for(let i=1;i<=50;i++){
    commercePlaceholders.push(function(){
        const res=`Placeholder Commerce Calc #${i}`;
        console.log(res);
        saveHistory("commerce", res,"Result Placeholder");
    });
}

/* ----- Commerce Graphs ----- */
function generateCommerceGraph(){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={
        labels:["Month1","Month2","Month3","Month4","Month5"],
        datasets:[{
            label:"Profit/Loss",
            data:[Math.random()*5000,Math.random()*3000,Math.random()*7000,Math.random()*1000,Math.random()*6000],
            borderColor:"#00ff99",
            backgroundColor:"rgba(0,255,153,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:"bar",data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("commerce","Generated Commerce Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportCommerceJSON(){
    const data=addBranding(JSON.stringify(historyData.commerce,null,2));
    downloadFile("commerce_history.json",data);
}

function exportCommerceCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.commerce.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("commerce_history.csv",addBranding(csv));
}
/* ============================ Tech / Coding Calculations ============================ */

/* ----- Algorithm Helpers ----- */
function factorial(n){
    if(n<0) return null;
    if(n===0||n===1) return 1;
    let f=1;
    for(let i=2;i<=n;i++) f*=i;
    return f;
}

function fibonacci(n){
    if(n<=0) return [];
    const fib=[0];
    if(n===1) return fib;
    fib.push(1);
    for(let i=2;i<n;i++) fib.push(fib[i-1]+fib[i-2]);
    return fib;
}

function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}

function sumArray(arr){return arr.reduce((a,b)=>a+b,0);}
function maxArray(arr){return Math.max(...arr);}
function minArray(arr){return Math.min(...arr);}
function averageArray(arr){return sumArray(arr)/arr.length;}

/* ----- String Utilities ----- */
function reverseString(str){return str.split("").reverse().join("");}
function isPalindrome(str){return str===reverseString(str);}
function countVowels(str){return (str.match(/[aeiouAEIOU]/g)||[]).length;}
function countConsonants(str){return (str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)||[]).length;}

/* ----- Date-Time Helpers ----- */
function getCurrentTimestamp(){return new Date().toISOString();}
function formatDate(date){return date.toLocaleString();}
function daysBetween(d1,d2){return Math.ceil(Math.abs(d2-d1)/86400000);}
function hoursBetween(d1,d2){return Math.ceil(Math.abs(d2-d1)/3600000);}
function minutesBetween(d1,d2){return Math.ceil(Math.abs(d2-d1)/60000);}

/* ----- Regex / Validation ----- */
function validateEmail(email){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}
function validateURL(url){return /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-]*)*\/?$/.test(url);}
function extractNumbers(str){return (str.match(/\d+/g)||[]).map(Number);}
function extractWords(str){return str.match(/\b\w+\b/g)||[];}

/* ----- Crypto / Hashing ----- */
async function sha256(str){
    const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");
}

/* ----- API / JSON Helpers ----- */
function parseJSONSafe(str){
    try{return JSON.parse(str);}catch(e){return null;}
}
function prettyJSON(obj){return JSON.stringify(obj,null,2);}
function validateJSONKeys(obj,keys){return keys.every(k=>obj.hasOwnProperty(k));}

/* ----- Coding Graphs ----- */
function generateTechGraph(){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={
        labels:["Task1","Task2","Task3","Task4","Task5"],
        datasets:[{
            label:"Execution Time (ms)",
            data:[Math.random()*200,Math.random()*500,Math.random()*150,Math.random()*400,Math.random()*300],
            borderColor:"#ff9900",
            backgroundColor:"rgba(255,153,0,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:"line",data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("tech","Generated Tech Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportTechJSON(){
    const data=addBranding(JSON.stringify(historyData.tech,null,2));
    downloadFile("tech_history.json",data);
}

function exportTechCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.tech.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("tech_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Tech Calculations ----- */
const techPlaceholders=[];
for(let i=1;i<=50;i++){
    techPlaceholders.push(function(){
        const res=`Placeholder Tech Calc #${i}`;
        console.log(res);
        saveHistory("tech", res,"Result Placeholder");
    });
}
/* ============================ Science Calculations ============================ */

/* ----- Physics Constants ----- */
const PHYSICS_CONST = {
    g:9.80665, // m/s^2
    c:299792458, // m/s
    h:6.62607015e-34, // Js
    G:6.67430e-11 // N m^2 / kg^2
};

/* ----- Chemistry Constants ----- */
const CHEMISTRY_CONST = {
    R:8.3145, // J/(mol K)
    Na:6.02214076e23 // mol^-1
};

/* ----- Physics Calculations ----- */
function calcForce(mass,acc){return mass*acc;}
function calcWork(force,distance){return force*distance;}
function calcPower(work,time){return work/time;}
function calcKineticEnergy(mass,velocity){return 0.5*mass*velocity**2;}
function calcPotentialEnergy(mass,height){return mass*PHYSICS_CONST.g*height;}
function calcMomentum(mass,velocity){return mass*velocity;}
function calcGravityForce(m1,m2,r){return PHYSICS_CONST.G*m1*m2/(r*r);}

/* Motion Equations */
function velocity(u,a,t){return u+a*t;}
function displacement(u,a,t){return u*t+0.5*a*t**2;}

/* ----- Chemistry Calculations ----- */
function moles(mass,molecularWeight){return mass/molecularWeight;}
function molarMass(elements){ /* e.g., {H:2,O:1} */ 
    let sum=0;
    for(const el in elements){
        const mass=ELEMENTS[el]||0;
        sum+=mass*elements[el];
    }
    return sum;
}
function concentration(moles,volume){return moles/volume;} // mol/L
function idealGasPV=nRT(P,V,T){return P*V- n*CHEMISTRY_CONST.R*T;}
function pH(H){return -Math.log10(H);}
function reactionRate(deltaC,deltaT){return deltaC/deltaT;}

/* ----- Biology Calculations ----- */
function bmi(weightKg,heightM){return weightKg/(heightM**2);}
function dosage(mass,perKg){return mass*perKg;}
function populationGrowth(N0,r,t){return N0*Math.exp(r*t);}

/* ----- Maths Utilities for Science ----- */
function sinDeg(d){return Math.sin(d*Math.PI/180);}
function cosDeg(d){return Math.cos(d*Math.PI/180);}
function tanDeg(d){return Math.tan(d*Math.PI/180);}
function log10(x){return Math.log10(x);}
function ln(x){return Math.log(x);}
function exp(x){return Math.exp(x);}

/* ----- Graphs ----- */
function generateScienceGraph(type="line",labels=[],values=[]){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={labels:labels.length?labels:["t1","t2","t3","t4","t5"],datasets:[{label:"Value",data:values.length?values:[1,2,3,4,5],borderColor:"#00ff99",backgroundColor:"rgba(0,255,153,0.3)"}]};
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:type,data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("science","Generated Science Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportScienceJSON(){
    const data=addBranding(JSON.stringify(historyData.science,null,2));
    downloadFile("science_history.json",data);
}

function exportScienceCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.science.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("science_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Science Calculations ----- */
const sciencePlaceholders=[];
for(let i=1;i<=50;i++){
    sciencePlaceholders.push(function(){
        const res=`Placeholder Science Calc #${i}`;
        console.log(res);
        saveHistory("science", res,"Result Placeholder");
    });
}
/* ============================ Commerce Calculations ============================ */

/* ----- Tax & Finance Constants ----- */
const TAX_CONST = {
    gstRates:[0,5,12,18,28],
    tdsRates:{salary:10, professional:10, contractor:10},
    tcsRates:{sale:0.1, import:0.05}
};

/* ----- Loan / Interest Calculations ----- */
function simpleInterest(P,R,T){return P*R*T/100;}
function compoundInterest(P,R,T,n=1){return P*((1+R/(100*n))**(n*T))-P;}
function emi(P,R,T){ // monthly EMI
    let r=R/(12*100);
    let n=T*12;
    return P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
}
function futureValue(P,R,T){return P*(1+R/100)**T;}
function roi(gain,cost){return ((gain-cost)/cost)*100;}
function depreciationSL(cost,salvage,life){return (cost-salvage)/life;}
function depreciationWDV(cost,rate,year){return cost*(1-rate/100)**year;}

/* ----- Payroll Calculations ----- */
function grossSalary(basic,hra,allowances){return basic+hra+allowances;}
function netSalary(gross,deductions){return gross-deductions;}
function taxTDS(income){return income*TAX_CONST.tdsRates.salary/100;}
function gstAmount(amount,rate){return amount*rate/100;}
function tcsAmount(amount,type="sale"){return amount*TAX_CONST.tcsRates[type];}

/* ----- Investment Calculations ----- */
function cagr(start,end,years){return ((end/start)**(1/years)-1)*100;}
function npv(rate,cashFlows){let npv=0;for(let i=0;i<cashFlows.length;i++){npv+=cashFlows[i]/(1+rate/100)**i;}return npv;}
function irr(cashFlows,guess=10){
    let rate=guess; for(let i=0;i<100;i++){let npvVal=npv(rate,cashFlows);rate-=npvVal/1000;} return rate;
}
function sip(fv,r,n){return fv*r/((Math.pow(1+r,n)-1)*((1+r)/r));} // approximation

/* ----- Graphs ----- */
function generateCommerceGraph(type="bar",labels=[],values=[]){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={labels:labels.length?labels:["Jan","Feb","Mar","Apr","May"],datasets:[{label:"Value",data:values.length?values:[1000,1500,1200,1800,2000],backgroundColor:"rgba(255,165,0,0.5)",borderColor:"#ff9900"}]};
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:type,data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("commerce","Generated Commerce Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportCommerceJSON(){
    const data=addBranding(JSON.stringify(historyData.commerce,null,2));
    downloadFile("commerce_history.json",data);
}
function exportCommerceCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.commerce.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("commerce_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Commerce Calculations ----- */
const commercePlaceholders=[];
for(let i=1;i<=50;i++){
    commercePlaceholders.push(function(){
        const res=`Placeholder Commerce Calc #${i}`;
        console.log(res);
        saveHistory("commerce", res,"Result Placeholder");
    });
}
/* ============================ Tech / Coding Calculations ============================ */

/* ----- History / Branding ----- */
if(!historyData.tech) historyData.tech=[];

/* ----- Numeric & Programming Calculations ----- */
function factorial(n){if(n<0) return undefined; let f=1; for(let i=2;i<=n;i++) f*=i; return f;}
function fibonacci(n){let a=0,b=1,arr=[0]; for(let i=1;i<n;i++){arr.push(b); [a,b]=[b,a+b];} return arr;}
function isPrime(n){if(n<2) return false; for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0) return false; return true;}
function gcd(a,b){while(b){[a,b]=[b,a%b]} return a;}
function lcm(a,b){return (a*b)/gcd(a,b);}
function binaryToDecimal(bin){return parseInt(bin,2);}
function decimalToBinary(dec){return dec.toString(2);}
function hexToDecimal(hex){return parseInt(hex,16);}
function decimalToHex(dec){return dec.toString(16);}
function octalToDecimal(oct){return parseInt(oct,8);}
function decimalToOctal(dec){return dec.toString(8);}

/* ----- Array / Data Analysis Calculators ----- */
function mean(arr){return arr.reduce((a,b)=>a+b,0)/arr.length;}
function median(arr){arr=arr.slice().sort((a,b)=>a-b); const mid=Math.floor(arr.length/2); return arr.length%2?arr[mid]:(arr[mid-1]+arr[mid])/2;}
function mode(arr){const m={}; arr.forEach(v=>m[v]=(m[v]||0)+1); const maxCount=Math.max(...Object.values(m)); return Object.keys(m).filter(k=>m[k]===maxCount);}
function variance(arr){const m=mean(arr); return arr.reduce((a,b)=>a+(b-m)**2,0)/arr.length;}
function standardDeviation(arr){return Math.sqrt(variance(arr));}
function correlation(arrX,arrY){
    const mx=mean(arrX), my=mean(arrY);
    const num=arrX.reduce((a,v,i)=>a+(v-mx)*(arrY[i]-my),0);
    const den=Math.sqrt(arrX.reduce((a,v)=>a+(v-mx)**2,0)*arrY.reduce((a,v)=>a+(v-my)**2,0));
    return num/den;
}

/* ----- String / Text Utilities ----- */
function reverseString(str){return str.split('').reverse().join('');}
function isPalindrome(str){const s=str.replace(/\W/g,'').toLowerCase(); return s===reverseString(s);}
function wordCount(str){return str.trim().split(/\s+/).length;}
function charFrequency(str){const freq={}; for(let c of str) freq[c]=(freq[c]||0)+1; return freq;}

/* ----- Crypto / API & Data Analysis ----- */
async function fetchCryptoPrice(symbol="BTC"){ 
    try{
        const res=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`);
        const data=await res.json();
        return data[symbol.toLowerCase()].usd;
    }catch(e){return null;}
}
async function fetchJSONFromURL(url){ 
    try{ const res=await fetch(url); return await res.json(); }catch(e){return null;}
}

/* ----- Graphs ----- */
function generateTechGraph(type="line",labels=[],values=[]){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={labels:labels.length?labels:["Step1","Step2","Step3","Step4","Step5"],datasets:[{label:"Values",data:values.length?values:[1,2,3,4,5],borderColor:"#00ffff",backgroundColor:"rgba(0,255,255,0.3)"}]};
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:type,data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("tech","Generated Tech Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportTechJSON(){
    const data=addBranding(JSON.stringify(historyData.tech,null,2));
    downloadFile("tech_history.json",data);
}
function exportTechCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.tech.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("tech_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Tech Calculations ----- */
const techPlaceholders=[];
for(let i=1;i<=50;i++){
    techPlaceholders.push(function(){
        const res=`Placeholder Tech Calc #${i}`;
        console.log(res);
        saveHistory("tech", res,"Result Placeholder");
    });
}
/* ============================ Science / Real-World Calculations ============================ */

/* ----- History / Branding ----- */
if(!historyData.science) historyData.science=[];

/* ----- Physics Calculations ----- */
function calcForce(mass,acceleration){return mass*acceleration;}  // F = m*a
function calcEnergy(mass,velocity){return 0.5*mass*velocity**2;} // KE = 1/2 m v^2
function calcPotentialEnergy(mass,gravity,height){return mass*gravity*height;} // PE = m*g*h
function calcPressure(force,area){return force/area;} // P = F/A
function calcDensity(mass,volume){return mass/volume;} // ρ = m/V
function calcOhmVoltage(current,resistance){return current*resistance;} // V = I*R
function calcOhmCurrent(voltage,resistance){return voltage/resistance;} // I = V/R
function calcOhmResistance(voltage,current){return voltage/current;} // R = V/I
function calcWaveSpeed(frequency,wavelength){return frequency*wavelength;} // v = f*λ
function calcAcceleration(vf,vi,time){return (vf-vi)/time;}

/* ----- Chemistry Calculations ----- */
function molarMass(elements){ // elements=[{symbol:"H",mass:1,count:2},...]
    return elements.reduce((acc,e)=>acc+e.mass*e.count,0);
}
function idealGasPVnRT(P,V,n,R=0.0821){return (P*V)/(n*R);} // T = PV/nR
function concentrationMoles(moles,volume){return moles/volume;} // C = n/V
function dilution(C1,V1,C2){return (C1*V1)/C2;} // V2 = C1*V1/C2
function pH(H){return -Math.log10(H);} // pH calculation
function pOH(OH){return -Math.log10(OH);} // pOH calculation
function percentYield(actual,theoretical){return (actual/theoretical)*100;}

/* ----- Biology / Life Sciences ----- */
function bmi(weightKg,heightM){return weightKg/(heightM**2);} // Body Mass Index
function bodyFatPercentage(bmi,age,gender){return gender==="male"?1.20*bmi+0.23*age-16.2:1.20*bmi+0.23*age-5.4;}
function heartRateMax(age){return 220-age;}
function respirationRateOxygen(VO2,maxHR){return VO2/maxHR*100;} // Example metric
function basalMetabolicRate(weight,height,age,gender){
    if(gender==="male") return 66.5 + (13.75*weight)+(5.003*height*100)-(6.755*age);
    return 655.1 + (9.563*weight)+(1.850*height*100)-(4.676*age);
}

/* ----- Astronomy / Space ----- */
function orbitalVelocity(G,M,r){return Math.sqrt(G*M/r);} // v = sqrt(GM/r)
function escapeVelocity(G,M,r){return Math.sqrt(2*G*M/r);} // v = sqrt(2GM/r)
function surfaceGravity(G,M,R){return G*M/(R**2);} // g = GM/R^2
function luminosity(radius,temperature,sigma=5.67e-8){return 4*Math.PI*(radius**2)*sigma*(temperature**4);} // Stefan-Boltzmann

/* ----- Unit Conversions for Science ----- */
function celsiusToFahrenheit(c){return (c*9/5)+32;}
function fahrenheitToCelsius(f){return (f-32)*5/9;}
function kelvinToCelsius(k){return k-273.15;}
function celsiusToKelvin(c){return c+273.15;}
function atmToPa(atm){return atm*101325;}
function paToAtm(pa){return pa/101325;}

/* ----- Graphs ----- */
function generateScienceGraph(type="line",labels=[],values=[]){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={labels:labels.length?labels:["Step1","Step2","Step3"],datasets:[{label:"Values",data:values.length?values:[1,2,3],borderColor:"#00ff00",backgroundColor:"rgba(0,255,0,0.3)"}]};
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:type,data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("science","Generated Science Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportScienceJSON(){
    const data=addBranding(JSON.stringify(historyData.science,null,2));
    downloadFile("science_history.json",data);
}
function exportScienceCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.science.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("science_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Science Calculations ----- */
const sciencePlaceholders=[];
for(let i=1;i<=50;i++){
    sciencePlaceholders.push(function(){
        const res=`Placeholder Science Calc #${i}`;
        console.log(res);
        saveHistory("science", res,"Result Placeholder");
    });
}
/* ============================ Commerce / Financial Calculations ============================ */

/* ----- History / Branding ----- */
if(!historyData.commerce) historyData.commerce=[];

/* ----- EMI & Loan Calculations ----- */
function calcEMI(principal,rate,tenureMonths){
    const r = rate/(12*100);
    return (principal*r)/(1-Math.pow(1+r,-tenureMonths));
}
function calcLoanBalance(principal,rate,tenureMonths,paidMonths){
    const emi = calcEMI(principal,rate,tenureMonths);
    const r = rate/(12*100);
    return principal*Math.pow(1+r,paidMonths) - emi*(Math.pow(1+r,paidMonths)-1)/r;
}
function calcTotalInterest(principal,rate,tenureMonths){
    return calcEMI(principal,rate,tenureMonths)*tenureMonths - principal;
}

/* ----- GST / TDS / Tax Calculations ----- */
function calcGST(amount,rate){return amount*rate/100;}
function calcPriceWithGST(amount,rate){return amount + calcGST(amount,rate);}
function calcTDS(amount,tdsRate){return amount*tdsRate/100;}
function calcIncomeTax(income){ 
    // Simplified slab (example for India 2026)
    let tax=0;
    if(income<=250000) tax=0;
    else if(income<=500000) tax=(income-250000)*0.05;
    else if(income<=1000000) tax=12500 + (income-500000)*0.2;
    else tax=112500 + (income-1000000)*0.3;
    return tax;
}

/* ----- Payroll / Salary Calculations ----- */
function calcNetSalary(gross,salaryComponents){
    // salaryComponents = {pfRate:12,tdsRate:10,bonus:5000}
    const pf = gross*salaryComponents.pfRate/100;
    const tds = gross*salaryComponents.tdsRate/100;
    const bonus = salaryComponents.bonus||0;
    return gross - pf - tds + bonus;
}

/* ----- Investment Calculations ----- */
function calcSimpleInterest(principal,rate,timeYears){return principal*rate*timeYears/100;}
function calcCompoundInterest(principal,rate,timeYears,n=1){return principal*Math.pow(1+rate/(100*n),n*timeYears)-principal;}
function calcFutureValue(pv,rate,timeYears){return pv*Math.pow(1+rate/100,timeYears);}
function calcPresentValue(fv,rate,timeYears){return fv/Math.pow(1+rate/100,timeYears);}

/* ----- Stock / Share Calculations ----- */
function calcStockGain(buyPrice,sellPrice,quantity){return (sellPrice-buyPrice)*quantity;}
function calcStockGainPercent(buyPrice,sellPrice){return ((sellPrice-buyPrice)/buyPrice)*100;}
function calcDividendYield(dividend,price){return (dividend/price)*100;}

/* ----- Currency & Conversion ----- */
async function getLiveCurrencyRate(from,to){
    try{
        const resp = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}`);
        const data = await resp.json();
        return data.result;
    }catch(e){console.error(e); return null;}
}

/* ----- Graphs ----- */
function generateCommerceGraph(type="bar",labels=[],values=[]){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={labels:labels.length?labels:["Step1","Step2","Step3"],datasets:[{label:"Values",data:values.length?values:[100,200,150],backgroundColor:"rgba(255,165,0,0.5)",borderColor:"#FFA500",borderWidth:1}]};
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:type,data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("commerce","Generated Commerce Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportCommerceJSON(){
    const data=addBranding(JSON.stringify(historyData.commerce,null,2));
    downloadFile("commerce_history.json",data);
}
function exportCommerceCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.commerce.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("commerce_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Commerce Calculations ----- */
const commercePlaceholders=[];
for(let i=1;i<=50;i++){
    commercePlaceholders.push(function(){
        const res=`Placeholder Commerce Calc #${i}`;
        console.log(res);
        saveHistory("commerce", res,"Result Placeholder");
    });
}
/* ============================ Tech / Coding Calculations ============================ */

/* ----- History / Branding ----- */
if(!historyData.tech) historyData.tech=[];

/* ----- Algorithm Complexity Estimator ----- */
function estimateComplexity(opsCount,inputSize){
    // Simple O(n) / O(n^2) example
    const n = inputSize || 100;
    return {
        "O(1)": opsCount,
        "O(log n)": opsCount * Math.log2(n),
        "O(n)": opsCount * n,
        "O(n log n)": opsCount * n * Math.log2(n),
        "O(n^2)": opsCount * n * n
    };
}

/* ----- Data Conversions ----- */
function bytesToKB(bytes){return bytes/1024;}
function bytesToMB(bytes){return bytes/(1024*1024);}
function kbToBytes(kb){return kb*1024;}
function mbToBytes(mb){return mb*1024*1024;}

/* ----- API / JSON Handling ----- */
function fetchJSON(url){
    return fetch(url).then(resp=>resp.json()).catch(e=>{console.error(e); return null;});
}
function prettyPrintJSON(obj){return JSON.stringify(obj,null,4);}
function parseJSONSafe(str){
    try{return JSON.parse(str);}catch(e){return null;}
}

/* ----- Math / Computation ----- */
function factorial(n){return n<=1?1:n*factorial(n-1);}
function fibonacci(n){return n<=1?n:fibonacci(n-1)+fibonacci(n-2);}
function gcd(a,b){return b==0?a:gcd(b,a%b);}
function lcm(a,b){return a*b/gcd(a,b);}
function isPrime(n){if(n<2)return false;for(let i=2;i<=Math.sqrt(n);i++){if(n%i==0)return false;}return true;}

/* ----- Code Metrics ----- */
function countLinesOfCode(code){
    return code.split("\n").filter(line=>line.trim()!=="").length;
}
function countFunctions(code){
    return (code.match(/function\s+\w+\s*\(/g)||[]).length;
}
function countVariables(code){
    return (code.match(/(const|let|var)\s+\w+/g)||[]).length;
}

/* ----- Graph / Visualization ----- */
function generateTechGraph(type="line",labels=[],values=[]){
    const ctx=document.getElementById("graphCanvas").getContext("2d");
    const data={labels:labels.length?labels:["Step1","Step2","Step3"],datasets:[{label:"Tech Values",data:values.length?values:[10,50,30],backgroundColor:"rgba(0,255,255,0.5)",borderColor:"#00FFFF",borderWidth:2}]};
    if(graphChart) graphChart.destroy();
    graphChart=new Chart(ctx,{type:type,data:data,options:{responsive:true,plugins:{legend:{labels:{color:"#ffffff"}}},scales:{x:{ticks:{color:"#ffffff"}},y:{ticks:{color:"#ffffff"}}}}});
    saveHistory("tech","Generated Tech Graph","See Chart");
}

/* ----- Export / Import ----- */
function exportTechJSON(){
    const data=addBranding(JSON.stringify(historyData.tech,null,2));
    downloadFile("tech_history.json",data);
}
function exportTechCSV(){
    let csv="Calculation,Result,Timestamp\n";
    historyData.tech.forEach(item=>{
        csv+=`"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    downloadFile("tech_history.csv",addBranding(csv));
}

/* ----- Placeholder 50+ Tech Calculations ----- */
const techPlaceholders=[];
for(let i=1;i<=50;i++){
    techPlaceholders.push(function(){
        const res=`Placeholder Tech Calc #${i}`;
        console.log(res);
        saveHistory("tech", res,"Result Placeholder");
    });
}

/* ----- Interactive Code Runner (Basic) ----- */
function runJSCode(code){
    try{
        const result=eval(code);
        saveHistory("tech","Run JS Code",result);
        return result;
    }catch(e){
        saveHistory("tech","Run JS Code",`Error: ${e}`);
        return `Error: ${e}`;
    }
}