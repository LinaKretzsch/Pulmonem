// Div hide and show functionlity
let dashboard = document.getElementById('dashboard');
let wanrings = document.getElementById('wanings');
let get_dose = document.getElementById('get_dose');
let instructions = document.getElementById('instructions');

let dashboardData = document.getElementById('dashboardData');
let wanringsData = document.getElementById('waningsData');
let get_doseData = document.getElementById('get_doseData');
let instructionsData = document.getElementById('instructionsData');

dashboardData.style.display = "block";
warningsData.style.display = "none";
get_doseData.style.display = "none";
instructionsData.style.display = "none";


dashboard.onclick = () => {
	if(dashboardData.style.display === "none")
	{
		dashboardData.style.display = "block";
	}
  warningsData.style.display = "none";
  get_doseData.style.display = "none";
  instructionsData.style.display = "none";
};

warnings.onclick = () => {
	if(warningsData.style.display === "none")
	{
		warningsData.style.display = "block";
	}
  dashboardData.style.display = "none";
  get_doseData.style.display = "none";
  instructionsData.style.display = "none";
};

get_dose.onclick = () => {
	if(get_doseData.style.display === "none")
	{
		get_doseData.style.display = "block";
	}
  dashboardData.style.display = "none";
  warningsData.style.display = "none";
  instructionsData.style.display = "none";
};

instructions.onclick = () => {
	if(instructionsData.style.display === "none")
	{
    instructionsData.style.display = "block";
	}
  dashboardData.style.display = "none";
  warningsData.style.display = "none";
  get_doseData.style.display = "none";
};
