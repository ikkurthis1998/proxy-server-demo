const axios = require("axios");
const cors = require("cors");
const express = require("express");

const app = express();

const port = 3000;

app.use(cors());

app.get("/", async (req, res) => {
	try {
		const response = await axios.get(
			"https://random-value-generator.herokuapp.com/"
		);
		console.log(response.data);
		res.send(`${response.data}`);
	} catch (error) {
		console.log(error);
	}
});

app.listen(3000, () => {
	console.log("Switched On");
});
