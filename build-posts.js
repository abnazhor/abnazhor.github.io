import fs from "fs";
import { nanoid } from 'nanoid';

const main = () => {
    const baseRoute = "./static/posts";
    const postsFolder = fs.readdirSync(baseRoute);
    const postIndex = [];

    for (const folder of postsFolder) {
        if (!/^_/.test(folder)) {
            const postFiles = fs.readdirSync(`${baseRoute}/${folder}`);

            const content = postFiles.find(file => file.indexOf(".md") !== -1);
            const coverImage = postFiles.find(file => /\.(avif|png|jpeg|jpg)/.test(file));

            postIndex.push({
                id: nanoid(),
                coverImage: `/posts/${folder}/${coverImage}`,
                contentRoute: `/posts/${folder}/${content}`,
                content: "",
                title: content.slice(0, content.length - 3),
                createdOn: new Date(folder)
            })
        }
    }

    fs.writeFileSync("./static/post-index.json", JSON.stringify(postIndex));
}

main();