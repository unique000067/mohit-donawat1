/* ============================================= */
/* Mohit Ultra Pro Calculator - Mega JS File    */
/* ============================================= */

/* ============================ Global Variables ============================ */
const categories = ["general","science","commerce","tech"];
let historyData = {
    general: [],
    science: [],
    commerce: [],
    tech: []
};

/* ============================ Utils ============================ */
function formatTimestamp() {
    const now = new Date();
    return now.toISOString();
}
function addBranding(data) {
    return `Mohit Ultra Pro Calculator\nBy Mohit Donawat | @mohit.donawat\nTimestamp: ${formatTimestamp()}\n\n${data}`;
}
function downloadFile(filename, content) {
    const blob = new Blob([content], {type:"text/plain;charset=utf-8"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

/* ============================ History Functions ============================ */
function saveHistory(category, calculation, result) {
    historyData[category].push({calculation, result, timestamp:formatTimestamp()});
    renderHistory(category);
}
function renderHistory(category) {
    const container = document.getElementById(category+"History");
    if(!container) return;
    container.innerHTML = "";
    historyData[category].forEach((item,i)=>{
        const div = document.createElement("div");
        div.classList.add("history-item");
        div.innerHTML = `<strong>${i+1}:</strong> ${item.calculation} = ${item.result} <span class="timestamp">${item.timestamp}</span>`;
        container.appendChild(div);
    });
}

/* ============================ General Calculations ============================ */
function meetingPlanner() {
    const base = document.getElementById("meetBase").value;
    const time = document.getElementById("meetTime").value;
    const zones = document.getElementById("meetZones").value.split(",");
    const out = document.getElementById("meetOut");
    let result = `Base: ${base} Time: ${time}\n`;
    zones.forEach(zone => {
        result += `${zone.trim()}: ${time} (placeholder conversion)\n`;
    });
    out.textContent = result;
    saveHistory("general",`Meeting Planner ${time} for ${zones.join(",")}`,result);
}
function calcAge() {
    const dob = new Date(document.getElementById("dob").value);
    const now = new Date();
    const diff = now - dob;
    const age = Math.floor(diff / (1000*60*60*24*365));
    document.getElementById("ageOut").textContent = `Age: ${age} years`;
    saveHistory("general",`Calculate Age from ${dob.toDateString()}`,age);
}
function futureAge() {
    const dob = new Date(document.getElementById("dob").value);
    const future = new Date(document.getElementById("futureDate").value);
    const diff = future - dob;
    const age = Math.floor(diff / (1000*60*60*24*365));
    document.getElementById("ageOut").textContent = `Future Age: ${age} years`;
    saveHistory("general",`Future Age from ${dob.toDateString()} to ${future.toDateString()}`,age);
}

/* ============================ Units Conversion ============================ */
const unitsData = {
    length:{meter:1, kilometer:0.001, cm:100, inch:39.3701, foot:3.28084},
    weight:{kg:1, g:1000, lb:2.20462},
    currency:{USD:1, INR:82, EUR:0.9} // placeholder rates
};
function populateUnits() {
    const categories = Object.keys(unitsData);
    const catSelect = document.getElementById("unitCategory");
    categories.forEach(cat=>{
        const opt = document.createElement("option");
        opt.value = cat; opt.textContent=cat.charAt(0).toUpperCase()+cat.slice(1);
        catSelect.appendChild(opt);
    });
    updateUnitOptions();
}
function updateUnitOptions() {
    const cat = document.getElementById("unitCategory").value;
    const from = document.getElementById("unitFrom");
    const to = document.getElementById("unitTo");
    from.innerHTML=""; to.innerHTML="";
    Object.keys(unitsData[cat]).forEach(u=>{
        const opt1 = document.createElement("option"); opt1.value=u; opt1.textContent=u; from.appendChild(opt1);
        const opt2 = document.createElement("option"); opt2.value=u; opt2.textContent=u; to.appendChild(opt2);
    });
}
function convertUnit() {
    const cat = document.getElementById("unitCategory").value;
    const val = parseFloat(document.getElementById("unitValue").value);
    const from = document.getElementById("unitFrom").value;
    const to = document.getElementById("unitTo").value;
    const result = val * (unitsData[cat][to]/unitsData[cat][from]);
    document.getElementById("unitOut").textContent = `${val} ${from} = ${result} ${to}`;
    saveHistory("general",`${val} ${from} to ${to}`,result);
}
function swapUnits() {
    const from = document.getElementById("unitFrom");
    const to = document.getElementById("unitTo");
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
}

/* ============================ Graph Functions ============================ */
let graphChart;
function generateGraph() {
    const ctx = document.getElementById("graphCanvas").getContext("2d");
    const data = {
        labels:["Jan","Feb","Mar","Apr","May"],
        datasets:[{
            label:"Sample Data",
            data:[12,19,3,5,2],
            borderColor:"#00d4ff",
            backgroundColor:"rgba(0,212,255,0.3)"
        }]
    };
    if(graphChart) graphChart.destroy();
    graphChart = new Chart(ctx,{ type:"line", data:data, options:{ responsive:true, plugins:{ legend:{labels:{color:"#e0e0e0"}}}, scales:{ x:{ ticks:{color:"#e0e0e0"}}, y:{ ticks:{color:"#e0e0e0"} } } } });
    saveHistory("general","Generated Sample Graph","See Chart");
}

/* ============================ Export / Import ============================ */
function exportTimeHistoryJSON() {
    const data = addBranding(JSON.stringify(historyData.general,null,2));
    downloadFile("general_history.json",data);
}
function exportTimeHistoryCSV() {
    let csv = "Calculation,Result,Timestamp\n";
    historyData.general.forEach(item=>{
        csv += `"${item.calculation}","${item.result}","${item.timestamp}"\n`;
    });
    csv = addBranding(csv);
    downloadFile("general_history.csv",csv);
}
function importTimeFile(event) {
    const file = event.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = e=>{
        try{
            const imported = JSON.parse(e.target.result);
            if(imported.general) historyData.general = imported.general;
            renderHistory("general");
        }catch(err){ alert("Invalid JSON file"); }
    };
    reader.readAsText(file);
}
function printTimeHistory() {
    const printWindow = window.open('','PRINT');
    printWindow.document.write('<pre>'+addBranding(JSON.stringify(historyData.general,null,2))+'</pre>');
    printWindow.document.close();
    printWindow.print();
}

/* ============================ Sidebar Navigation ============================ */
document.querySelectorAll("#sidebar ul li").forEach(item=>{
    item.addEventListener("click",()=>{
        document.querySelectorAll("#sidebar ul li").forEach(i=>i.classList.remove("active"));
        item.classList.add("active");
        document.getElementById("category-title").textContent = item.textContent + " Calculations";
    });
});

/* ============================ Initialization ============================ */
window.addEventListener("DOMContentLoaded",()=>{
    populateUnits();
});