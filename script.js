let home = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let world = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let politics = "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let magazine = "https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let technology = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let science = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let health = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let sports = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let arts = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let fashion = "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let food = "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let travel = "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=0JGakht5LyDtCQMkdOi2JktqTKFDAalu";

let d = new Date();
let date = d.toDateString();
document.getElementById("d").innerHTML = date;

async function toggle(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  setTimeout(() => {
    loading.remove();
    section.style.display = "block";
  }, 2000);

  let data1="";
  data.results.map((values) => {
    console.log(values.title);

    data1+=`<div class="card mb-3" style="max-width: 100%;">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
        <h4 class="card-title text-uppercase" title="Section">${values.section}</h4>
          <h5 class="card-title"  title="Title">${values.title}</h5>
          <h5 class="card-title"  title="byline">${values.byline}</h5>
          <p class="card-text text-secondary"  title="Created Date">${values.created_date}</p>
          <h5 class="card-title"  title="Item Type">${values.item_type}</h5>
          <p class="card-text fs-5" title="Abstract">${values.abstract}</p>
          <a href="${values.short_url}" target="_blank" class="short"  title="Short-url">Continue Reading</a>
        </div>
      </div>
      <div class="col-md-4 image">
        <img src="${values.multimedia[0].url}" class="img-fluid rounded-start img-thumbnail" id="img1" title="${values.multimedia[0].caption}" alt="">
      </div>
    </div>
  </div>`
  });
  document.getElementById("content").innerHTML=data1;
};
toggle(home);

const loading = document.getElementById("loading");
const section = document.getElementById("content");
