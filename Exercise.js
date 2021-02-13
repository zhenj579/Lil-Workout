class Exercise {

	constructor(name, url, timestamp) {
		this.name = name;
		this.url = url;
		this.timestamp = timestamp;
	}

	getName() {
		return this.name;
	}

	getUrl() {
		return this.url;
	}

	getTimestamp() {
		return this.timestamp;
	}

	getLink() {
		return this.url.concat("&t=").concat(this.timestamp);
	}

}