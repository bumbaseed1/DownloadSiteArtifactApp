document
    .getElementById("downloadButton")
    .addEventListener("click", function () {
        // Replace 'github_username', 'repository_name', and 'file_path' with your GitHub details
        var githubUsername = "bumbaseed1";
        var repositoryName = "ArtifactApp";
        var filePath = "ArtfiactApp/apk/debug/app-debug.apk";

        var fileURL = `https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/main/${filePath}`;
        var fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

        var xhr = new XMLHttpRequest();
        xhr.open("GET", fileURL, true);
        xhr.responseType = "blob";

        xhr.onload = function () {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = fileName;
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            delete a;
        };

        xhr.send();
    });
