import { File, Text } from "@asyncapi/generator-react-sdk";

export default function () {
    return (
        <File name="client.js">
            <Text>{`const express = require('express');

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("AsyncAPI is Cool!!!");
})

module.exports = { app };`}
            </Text>
        </File>
    );
}
