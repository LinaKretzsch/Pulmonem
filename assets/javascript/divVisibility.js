// Div hide and show functionlity
let dashboard = document.getElementById('dashboardButton');
let warnings = document.getElementById('warningsButton');
let get_dose = document.getElementById('get_doseButton');
let instructions = document.getElementById('instructionsButton');

let dashboardData = document.getElementById('dashboard');
let warningsData = document.getElementById('warnings');
let get_doseData = document.getElementById('get_dose');
let instructionsData = document.getElementById('instructions');

dashboardData.style.display = "flex";
warningsData.style.display = "none";
get_doseData.style.display = "none";
instructionsData.style.display = "none";


dashboard.onclick = () => {
	if(dashboardData.style.display === "none")
	{
		dashboardData.style.display = "flex";
	}
  warningsData.style.display = "none";
  get_doseData.style.display = "none";
  instructionsData.style.display = "none";
};

warnings.onclick = () => {
	if(warningsData.style.display === "none")
	{
		warningsData.style.display = "flex";
	}
  dashboardData.style.display = "none";
  get_doseData.style.display = "none";
  instructionsData.style.display = "none";
};

get_dose.onclick = () => {
	if(get_doseData.style.display === "none")
	{
		get_doseData.style.display = "flex";
	}
  dashboardData.style.display = "none";
  warningsData.style.display = "none";
  instructionsData.style.display = "none";
};

instructions.onclick = () => {
	if(instructionsData.style.display === "none")
	{
    instructionsData.style.display = "flex";
	}
  dashboardData.style.display = "none";
  warningsData.style.display = "none";
  get_doseData.style.display = "none";
};
