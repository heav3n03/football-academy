function scrollToSurvey(){

document
.getElementById("survey")
.scrollIntoView({
behavior:"smooth"
});

}

function generatePlan(){

let age =
document.getElementById("age").value;

let fitness =
document.getElementById("fitness").value;

let position =
document.getElementById("position").value;

let weaknesses =
document.getElementById("weaknesses").value;

let plan = `
<h3>Personalized Football Plan</h3>

<p>
Position: ${position}
</p>

<p>
Fitness Level: ${fitness}
</p>

<h4>Weekly Schedule</h4>

<ul>

<li>Monday - Ball Mastery</li>

<li>Tuesday - Passing + Fitness</li>

<li>Wednesday - Recovery</li>

<li>Thursday - Shooting</li>

<li>Friday - Position Specific Training</li>

<li>Saturday - Match Simulation</li>

<li>Sunday - Recovery</li>

</ul>

<h4>Focus Area</h4>

<p>${weaknesses}</p>

`;

document.getElementById("output").innerHTML =
plan;

localStorage.setItem(
"footballPlan",
plan
);

}
