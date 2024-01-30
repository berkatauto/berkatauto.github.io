
async function getLastNew() {
    fetch("https://asia-southeast2-spheric-entity-401507.cloudfunctions.net/getarticle", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
    .then(response => {
        return response.json();
    })
    .then (data => {
        console.log(data);
        // get data max 3 and sort by last date
        data.sort(function(a, b) {
            var dateA = new Date(a.date), dateB = new Date(b.date);
            return dateB - dateA;
        });
        data = data.slice(0, 3);
        data.forEach(data => {
            const card = `
            <div class="animate_top sg vk rm xm">
            <div class="c rc i z-1 pg">
              <img class="w-full" src="./images/Rem-ABS.jpg" alt="Blog" />

              <div
                class="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10"
              >
                <a href="./pages/blog-belajar.html" class="vc ek rg lk gh sl ml il gi hi"
                  >Read More</a
                >
              </div>
            </div>
            <div class="yh">
              <div class="tc uf wf ag jq">
                <div class="tc wf ag">
                  <img src="./images/icon-man.svg" alt="User" />
                  <p>${data.author}</p>
                </div>
                <div class="tc wf ag">
                  <img src="images/icon-calender.svg" alt="Calender" />
                  <p>${data.date}</p>
                </div>
              </div>
              <h4 class="ek tj ml il kk wm xl eq lb">
                <a href="./pages/blog-belajar.html">${data.title}</a>
              </h4>
            </div>
          </div>
            `
        }
        )
    }
    )
    .catch
    (error => {
        console.log(error);
    });
}

getLastNew();