//1
import { File, Text } from "@asyncapi/generator-react-sdk";
//2
export default function ({ asyncapi }) {
    //3
    return (
        <File name="client.js">
            <Text>{`const express = require('express');

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("Server is running fine!!!");
})

module.exports = { app };`}
            </Text>
        </File>
    );
}
