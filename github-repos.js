const projects = document.querySelector("#projects ul");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);

        for(let i = 0; i < json.length; i++) {
            var repo = json[i];

            if(repo["name"] == "bx-sa1" || repo["name"] == "bx-sa1.github.io") continue;

            const li = document.createElement("li");
            
            const proj_item = document.createElement("a");
            proj_item.id = "project-item"
            proj_item.href = repo["html_url"];

            const proj_item_title = document.createElement("h3");
            proj_item_title.id = "project-item-title"
            proj_item_title.textContent = repo["name"];

            const proj_item_details = document.createElement("p");
            proj_item_details.id = "project-item-details"
            proj_item_details.textContent = repo["description"];

            proj_item.appendChild(proj_item_title);
            proj_item.appendChild(proj_item_details);

            li.appendChild(proj_item);

            projects.appendChild(li);
        }
    }
};
xhttp.open("GET", "https://api.github.com/users/bx-sa1/repos", true);
xhttp.setRequestHeader("Accept", "application/vnd.github+json");
xhttp.setRequestHeader("X-GitHub-Api-Version", "2022-11-28");
xhttp.send();

