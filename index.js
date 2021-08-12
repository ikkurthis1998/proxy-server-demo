const axios = require("axios");
const express = require("express");

const app = express();
app.get("/", async (req, res) => {
	req.setTimeout(500000);
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
