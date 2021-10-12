import fs from "fs";

const main = () => {
    const baseRoute = "./static/posts";
    const postsFolder = fs.readdirSync(baseRoute);
    const postIndex = [];

    for(const folder of postsFolder) {
        const postFiles = fs.readdirSync(`${baseRoute}/${folder}`);

        const content = postFiles.find(file => file.indexOf(".md") !== -1);
        const coverImage = postFiles.find(file => file.indexOf("cover") !== -1);

        postIndex.push({
            id: folder,
            coverImage: `/posts/${folder}/${coverImage}`,
            contentRoute: `/posts/${folder}/${content}`,
            content: "",
            title: content.slice(0, content.length-3)
        })
    }

    fs.writeFileSync("./static/post-index.json", JSON.stringify(postIndex));
}

main();